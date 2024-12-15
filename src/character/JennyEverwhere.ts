import Character from '@/sta/character'

const character = new Character('Jenny Everywhere')
character.setAttributes({
  control: 8,
  fitness: 7,
  daring: 11,
  presence: 10,
  insight: 11,
  reason: 9,
})
character.setDepartments({
  command: 2,
  conn: 5,
  engineering: 4,
  security: 1,
  medicine: 1,
  science: 3,
})

export default character
