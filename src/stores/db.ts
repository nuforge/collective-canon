import Dexie from 'dexie'
import type { Table } from 'dexie'

export interface Timeline {
  id?: number
  name: string
  creator: string
  createdAt: Date
  lastActivity: Date
  isForked: boolean
  originalTimelineId?: number
  stats: {
    missionsCompleted: number
    shipsActive: number
  }
}

export interface Ship {
  id?: number
  name: string
  status: 'ready' | 'damaged' | 'missing'
  timelineId: number
  sector: string
  lastMaintenance: Date
}

export interface Mission {
  id?: number
  title: string
  status: 'pending' | 'in-progress' | 'completed'
  timelineId: number
  assignedShipId?: number
  sector: string
  createdAt: Date
  completedAt?: Date
}

export class SpaceDatabase extends Dexie {
  timelines!: Table<Timeline>
  ships!: Table<Ship>
  missions!: Table<Mission>

  constructor() {
    super('SpaceDatabase')
    this.version(1).stores({
      timelines: '++id, name, creator, createdAt, lastActivity, isForked, originalTimelineId',
      ships: '++id, name, status, timelineId, sector, lastMaintenance',
      missions: '++id, title, status, timelineId, assignedShipId, sector, createdAt, completedAt',
    })
  }
}
