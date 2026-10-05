import { SpaceDatabase } from '@/stores/db'
import type { Timeline, Ship, Mission } from '@/stores/db'

export async function seedDatabase() {
  const db = new SpaceDatabase()

  // Check if we already have data
  const timelineCount = await db.timelines.count()
  if (timelineCount > 0) return

  // Create sample timelines
  const timeline1: Omit<Timeline, 'id'> = {
    name: 'Alpha Timeline',
    creator: 'Admiral Pike',
    createdAt: new Date(),
    lastActivity: new Date(),
    isForked: false,
    stats: {
      missionsCompleted: 0,
      shipsActive: 0,
    },
  }

  const timeline1Id = await db.timelines.add(timeline1)

  // Create sample ships
  const ships: Omit<Ship, 'id'>[] = [
    {
      name: 'USS Enterprise',
      status: 'ready',
      timelineId: timeline1Id,
      sector: 'Alpha-1',
      lastMaintenance: new Date(),
    },
    {
      name: 'USS Voyager',
      status: 'ready',
      timelineId: timeline1Id,
      sector: 'Beta-3',
      lastMaintenance: new Date(),
    },
    {
      name: 'USS Defiant',
      status: 'damaged',
      timelineId: timeline1Id,
      sector: 'Gamma-2',
      lastMaintenance: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000), // 7 days ago
    },
  ]

  for (const ship of ships) {
    await db.ships.add(ship)
  }

  // Create sample missions
  const missions: Omit<Mission, 'id'>[] = [
    {
      title: 'Explore Nebula',
      status: 'pending',
      timelineId: timeline1Id,
      sector: 'Delta-4',
      createdAt: new Date(),
    },
    {
      title: 'Diplomatic Mission',
      status: 'in-progress',
      timelineId: timeline1Id,
      sector: 'Beta-3',
      createdAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000), // 2 days ago
      assignedShipId: 2, // USS Voyager
    },
    {
      title: 'Defense Patrol',
      status: 'completed',
      timelineId: timeline1Id,
      sector: 'Alpha-1',
      createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000), // 5 days ago
      completedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
    },
  ]

  for (const mission of missions) {
    await db.missions.add(mission)
  }
}
