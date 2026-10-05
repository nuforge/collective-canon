import { defineStore } from 'pinia'
import { SpaceDatabase, type Ship, type Mission } from './db'
import { useTimelineStore } from './timeline'

export const useAdmiralStore = defineStore('admiral', {
  state: () => ({
    db: new SpaceDatabase(),
    ships: [] as Ship[],
    missions: [] as Mission[],
  }),

  getters: {
    shipsByStatus: (state) => {
      return {
        ready: state.ships.filter((ship) => ship.status === 'ready'),
        damaged: state.ships.filter((ship) => ship.status === 'damaged'),
        missing: state.ships.filter((ship) => ship.status === 'missing'),
      }
    },
    missionsByStatus: (state) => {
      return {
        pending: state.missions.filter((mission) => mission.status === 'pending'),
        inProgress: state.missions.filter((mission) => mission.status === 'in-progress'),
        completed: state.missions.filter((mission) => mission.status === 'completed'),
      }
    },
  },

  actions: {
    async loadData() {
      const timelineStore = useTimelineStore()
      const currentTimeline = timelineStore.currentTimeline

      if (!currentTimeline) return

      this.ships = await this.db.ships.where('timelineId').equals(currentTimeline.id!).toArray()

      this.missions = await this.db.missions
        .where('timelineId')
        .equals(currentTimeline.id!)
        .toArray()
    },

    async addShip(ship: Omit<Ship, 'id'>) {
      const id = await this.db.ships.add(ship)
      this.ships.push({ ...ship, id })
      return id
    },

    async updateShipStatus(shipId: number, status: Ship['status']) {
      await this.db.ships.update(shipId, { status })
      const ship = this.ships.find((s) => s.id === shipId)
      if (ship) ship.status = status
    },

    async createMission(title: string, sector: string) {
      const timelineStore = useTimelineStore()
      const currentTimeline = timelineStore.currentTimeline

      if (!currentTimeline) return

      const mission: Omit<Mission, 'id'> = {
        title,
        status: 'pending',
        timelineId: currentTimeline.id!,
        sector,
        createdAt: new Date(),
      }

      const id = await this.db.missions.add(mission)
      this.missions.push({ ...mission, id })
      return id
    },

    async assignShipToMission(missionId: number, shipId: number) {
      const mission = this.missions.find((m) => m.id === missionId)
      if (!mission) return

      await this.db.missions.update(missionId, {
        assignedShipId: shipId,
        status: 'in-progress',
      })

      mission.assignedShipId = shipId
      mission.status = 'in-progress'
    },

    async completeMission(missionId: number) {
      const mission = this.missions.find((m) => m.id === missionId)
      if (!mission) return

      await this.db.missions.update(missionId, {
        status: 'completed',
        completedAt: new Date(),
      })

      mission.status = 'completed'
      mission.completedAt = new Date()
    },
  },
})
