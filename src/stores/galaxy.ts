import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAdmiralStore } from './admiral'

export interface Sector {
  id: string
  x: number
  y: number
  name: string
  ships: number[]
  missions: number[]
}

export const useGalaxyStore = defineStore('galaxy', () => {
  const admiralStore = useAdmiralStore()
  const selectedSector = ref<Sector | null>(null)
  const sectors = ref<Sector[]>([])

  // Initialize 10x10 grid of sectors
  const initializeSectors = () => {
    const newSectors: Sector[] = []
    const sectorNames = [
      'Alpha',
      'Beta',
      'Gamma',
      'Delta',
      'Epsilon',
      'Zeta',
      'Eta',
      'Theta',
      'Iota',
      'Kappa',
    ]

    for (let y = 0; y < 10; y++) {
      for (let x = 0; x < 10; x++) {
        const name = `${sectorNames[y % 10]}-${x + 1}`
        newSectors.push({
          id: `${x}-${y}`,
          x,
          y,
          name,
          ships: [],
          missions: [],
        })
      }
    }

    sectors.value = newSectors
  }

  const selectSector = (sectorId: string) => {
    selectedSector.value = sectors.value.find((s) => s.id === sectorId) || null
  }

  const updateSectorData = () => {
    // Update ships and missions in each sector
    sectors.value = sectors.value.map((sector) => ({
      ...sector,
      ships: admiralStore.ships
        .filter((ship) => ship.sector === sector.name)
        .map((ship) => ship.id!),
      missions: admiralStore.missions
        .filter((mission) => mission.sector === sector.name)
        .map((mission) => mission.id!),
    }))
  }

  return {
    sectors,
    selectedSector,
    initializeSectors,
    selectSector,
    updateSectorData,
  }
})
