// Definition of attributes used in the game
const attributeColor = '#38aaa2'

export interface Attribute {
  id: string
  name: string
  type: string
  description: string
  color: string
  icon: string
  link?: string
  value?: number
}
// Example attributes with game rules
export const attributes: Record<string, Attribute> = {
  control: {
    id: 'control',
    name: 'Control',
    type: 'attribute',
    description: 'Self-control, discipline and motor skills.',
    color: attributeColor,
    icon: '$sta-control', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  daring: {
    id: 'daring',
    name: 'Daring',
    type: 'attribute',
    description: 'Reactions and quick thinking. Bravery.',
    color: attributeColor,
    icon: '$sta-daring', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  fitness: {
    id: 'fitness',
    name: 'Fitness',
    type: 'attribute',
    description: 'Strength, stamina and physical well-being.',
    color: attributeColor,
    icon: '$sta-fitness', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  presence: {
    id: 'presence',
    name: 'Presence',
    type: 'attribute',
    description: 'Personality and ability to influence and command.',
    color: attributeColor,
    icon: '$sta-presence', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  insight: {
    id: 'insight',
    name: 'Insight',
    type: 'attribute',
    description: 'Understand and awareness of other and the environement.',
    color: attributeColor,
    icon: '$sta-insight', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
  reason: {
    id: 'reason',
    name: 'Reason',
    type: 'attribute',
    description: 'Logic, knowledge and problem solving.',
    color: attributeColor,
    icon: '$sta-reason', // Material Design Icon (if using mdi)
    link: 'https://example.com/control',
  },
}
