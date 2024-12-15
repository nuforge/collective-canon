import Character from '@/sta/character'
import Trait from '@/sta/Trait'
import { traits } from '@/sta/traits'

const JennyEverywhere = new Character('Jenny Everywhere')

JennyEverywhere.setAttributes({
  control: 8,
  fitness: 7,
  daring: 11,
  presence: 10,
  insight: 11,
  reason: 9,
})
JennyEverywhere.setDepartments({
  command: 2,
  conn: 5,
  engineering: 4,
  security: 1,
  medicine: 1,
  science: 3,
})

JennyEverywhere.addTrait(traits['species-hologram'])
JennyEverywhere.addTrait(traits['starfleet-officer'])

JennyEverywhere.addTalent(traits['gut-feeling'])
JennyEverywhere.addTalent(traits['precision-maneuvering'])
JennyEverywhere.addTalent(traits['mental-repository'])

JennyEverywhere.addValue(
  new Trait(
    'There are No Stupid Questions',
    'mdi-comment-question-outline',
    'When you spend a point of Determination to ask the Gamemaster a question, gain 1 bonus Momentum if the answer is useful',
  ),
)
JennyEverywhere.addValue(
  new Trait(
    'Mark Your Exits',
    'mdi-map-marker-check',
    'When entering a new location, can leave a mark to find the way back',
  ),
)
JennyEverywhere.addValue(
  new Trait(
    'Yeah... I got this',
    'mdi-thumb-up',
    'When spending a point of Determination to obtain a fact, gain 1 bonus Momentum if the fact is useful',
  ),
)

JennyEverywhere.addFocus(
  new Trait(
    'Wormhole Navigation',
    'mdi-image-filter-center-focus-weak',
    'Skilled at navigating wormholes',
  ),
)
JennyEverywhere.addFocus(
  new Trait(
    'Wormhole Physics',
    'mdi-image-filter-center-focus-weak',
    'Skilled at understanding wormhole physics',
  ),
)
JennyEverywhere.addFocus(
  new Trait('Helm Operations', 'mdi-image-filter-center-focus-weak', 'Skilled at helm operations'),
)
JennyEverywhere.addFocus(
  new Trait(
    'Quantum Mechanics',
    'mdi-image-filter-center-focus-weak',
    'Skilled at quantum mechanics',
  ),
)
JennyEverywhere.addFocus(
  new Trait(
    'Ship Recognition',
    'mdi-image-filter-center-focus-weak',
    'Skilled at recognizing ships',
  ),
)

export default JennyEverywhere
