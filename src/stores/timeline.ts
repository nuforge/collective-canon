import { defineStore } from 'pinia'
import { SpaceDatabase, type Timeline } from './db'

export const useTimelineStore = defineStore('timeline', {
  state: () => ({
    db: new SpaceDatabase(),
    timelines: [] as Timeline[],
    currentTimeline: null as Timeline | null,
  }),

  actions: {
    async createTimeline(name: string, creator: string) {
      const timeline: Omit<Timeline, 'id'> = {
        name,
        creator,
        createdAt: new Date(),
        lastActivity: new Date(),
        isForked: false,
        stats: {
          missionsCompleted: 0,
          shipsActive: 0,
        },
      }

      const id = await this.db.timelines.add(timeline)
      this.timelines.push({ ...timeline, id })
      return id
    },

    async deleteTimeline(id: number) {
      await this.db.timelines.delete(id)
      this.timelines = this.timelines.filter((t) => t.id !== id)
      if (this.currentTimeline?.id === id) {
        this.currentTimeline = null
      }
    },

    async forkTimeline(id: number, newName: string, creator: string) {
      const original = await this.db.timelines.get(id)
      if (!original) throw new Error('Timeline not found')

      const forkedTimeline: Omit<Timeline, 'id'> = {
        name: newName,
        creator,
        createdAt: new Date(),
        lastActivity: new Date(),
        isForked: true,
        originalTimelineId: id,
        stats: {
          missionsCompleted: 0,
          shipsActive: 0,
        },
      }

      const newId = await this.db.timelines.add(forkedTimeline)
      this.timelines.push({ ...forkedTimeline, id: newId })
      return newId
    },

    async loadTimelines() {
      this.timelines = await this.db.timelines.toArray()
    },

    setCurrentTimeline(timeline: Timeline | null) {
      this.currentTimeline = timeline
    },
  },
})
