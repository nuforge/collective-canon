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
    'No Stupid Questions',
    'mdi-comment-question-outline',
    'Asks questions that others might not think to ask, leading to new insights',
  ),
)
JennyEverywhere.addValue(
  new Trait(
    'Mark Your Exits',
    'mdi-map-marker-check',
    'When entering a new location, leaves a trail of breadcrumbs to find the way back to the exit',
  ),
)
JennyEverywhere.addValue(
  new Trait(
    'Yeah... I got this',
    'mdi-thumb-up',
    'Brimming with questionable levels of confidence, even when the odds are against you',
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
