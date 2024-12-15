// Definition of traits used in the game
import Trait from '@/sta/Trait'

// Example traits with game rules
export const traits: { [key: string]: Trait } = {
  'species-hologram': new Trait(
    'Species: Hologram',
    'mdi-account-circle',
    'You are a holographic lifeform.',
    'trait',
  ),
  'starfleet-officer': new Trait(
    'Starfleet Officer',
    'mdi-navigation',
    'You are a member of Starfleet.',
    'trait',
  ),
  'technical-expertise': new Trait(
    'Technical Expertise',
    'mdi-account-circle-outline',
    'You are an expert in technical matters.',
    'talent',
  ),
  'gut-feeling': new Trait(
    'Gut Feeling',
    'mdi-account-circle-outline',
    'You have a strong intuition about things.',
    'talent',
  ),
  'precision-maneuvering': new Trait(
    'Precision Maneuvering',
    'mdi-gamepad',
    'You are skilled at precision maneuvering.',
    'talent',
    '#d39e00',
  ),
  'mental-repository': new Trait(
    'Mental Repository',
    'mdi-atom-variant',
    'You have a vast mental repository of knowledge.',
    'talent',
    '#2283b1',
  ),
}

export default traits

/*
JennyEverywhere.addTrait(new Trait('Species: Hologram', 'mdi-account-circle'))
JennyEverywhere.addTrait(new Trait('Starfleet Officer', 'mdi-account-circle-outline'))

JennyEverywhere.addTalent(new Trait('Technical Expertise', 'mdi-account-box-outline'))
JennyEverywhere.addTalent(new Trait('Precision Maneuvering', 'mdi-account-box-outline'))
JennyEverywhere.addTalent(new Trait('Mental Repository', 'mdi-account-box-outline'))

JennyEverywhere.addValue(new Trait('There are No Stupid Questions'))
JennyEverywhere.addValue(new Trait('Mark Your Exits'))
JennyEverywhere.addValue(new Trait('Yeah... I got this'))

JennyEverywhere.addFocus(new Trait('Wormhole Navigation', 'mdi-image-filter-center-focus-weak'))
JennyEverywhere.addFocus(new Trait('Wormhole Physics', 'mdi-account-circle-outline'))
JennyEverywhere.addFocus(new Trait('Helm Operations', 'mdi-image-filter-center-focus-weak'))
JennyEverywhere.addFocus(new Trait('Quantum Mechanics', 'mdi-image-filter-center-focus-weak'))
JennyEverywhere.addFocus(new Trait('Ship Recognition', 'mdi-image-filter-center-focus-weak'))*/
