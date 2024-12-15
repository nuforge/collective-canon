// Definition of attributes used in the game
const departmentRed = '#c4191a'
const departmentGold = '#d39e00'
const departmentBlue = '#2283b1'
export interface Department {
  id: string
  name: string
  type: string
  description: string
  color: string
  icon: string
  link?: string
  value?: number
}
// Example departments with game rules

export const departments: Record<string, Department> = {
  command: {
    id: 'command',
    name: 'Command',
    type: 'department',
    description: 'Lead a team and take charge.',
    color: departmentGold,
    icon: 'mdi-account-group', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  conn: {
    id: 'conn',
    name: 'Conn',
    type: 'department',
    description: 'Maneuvering and piloting a ship or vehicle.',
    color: departmentGold,
    icon: 'mdi-gamepad', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  engineering: {
    id: 'engineering',
    name: 'Engineering',
    type: 'department',
    description: 'Repair and maintainence of equipment.',
    color: departmentRed,
    icon: 'mdi-wrench', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  security: {
    id: 'security',
    name: 'Security',
    type: 'department',
    description: 'Defend and protect the crew and ship. Investigate.',
    color: departmentRed,
    icon: 'mdi-shield-account', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  medicine: {
    id: 'medicine',
    name: 'Medicine',
    type: 'department',
    description: 'Heal and treat injuries and illnesses.',
    color: departmentBlue,
    icon: 'mdi-hospital-box', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  science: {
    id: 'science',
    name: 'Science',
    type: 'department',
    description: 'Study and analyze the universe.',
    color: departmentBlue,
    icon: 'mdi-atom-variant', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
}
