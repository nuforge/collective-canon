export interface Path {
  id: string
  name: string
  description: string
  color: string
  icon: string
  link?: string
  value?: object
}

export const attributes: Record<number, Path> = {
  1: {
    id: 'stepone',
    name: 'Species',
    value: { attribute: 3, species: 1, ability: 1 },
    description:
      "Begin with a rating of 7 in each attribute and 1 in each department. Choose the character's Species.",
    color: '#e2a952',
    icon: 'mdi-account-box',
  },
  2: {
    id: 'steptwo',
    name: 'Environment',
    value: { value: 1, attribute: 1, department: 1 },
    description:
      "Choose the character's Environment; this is the type of world the character was raised on.",
    color: '#e5ed71',
    icon: 'mdi-earth-box',
  },
  3: {
    id: 'stepthree',
    name: 'Upbringing',
    value: { value: 1, attribute: 3, department: 1, focus: 1, talent: 1 },
    description:
      "Choose the character's Upbringing; this is the kind of education the character had during their formative years and the kind of influence their parents and mentors had.",
    color: '#aaf183',
    icon: 'mdi-home-account',
  },
  4: {
    id: 'stepfour',
    name: 'Career Path',
    value: { trait: 1, value: 1, attribute: 3, department: 3, focus: 3, talent: 1 },
    description:
      "Choose the character's Career Path. In the case of Starfleet characters, choose which track of the Academy they join: Command, Operations, or Sciences.",
    color: '#3e9cda',
    icon: 'mdi-chart-areaspline',
  },
  5: {
    id: 'stepfive',
    name: 'Experience',
    value: { value: 1, trait: 1 },
    description:
      "Choose how long the character's career has been so far—are they young and inexperienced, a seasoned veteran, or somewhere in between?",
    color: '#ad82ea',
    icon: 'mdi-note-edit',
  },
  6: {
    id: 'stepsix',
    name: 'Career Events',
    value: { attribute: 2, department: 2, focus: 2 },
    description:
      'Determine two or more Career Events. Regardless of how many events are chosen, the character gains:',
    color: '#de84ce',
    icon: 'mdi-calendar-account',
  },
  7: {
    id: 'stepseven',
    name: 'Finishing Touches',
    value: { value: 1, attribute: 2, department: 2, talent: 1, pastime: 1 },
    description:
      'Adjust attributes and departments that go above the maximum ratings for each. Record derived ratings:',
    color: '#cccccc',
    icon: 'mdi-checkbox-multiple-marked',
  },
}
