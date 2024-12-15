import Momentum from './Momentum'
/*import { attributes } from '@/sta/attributes'
import type { Attribute } from '@/sta/attributes'
import { departments } from '@/sta/departments'
import type { Department } from '@/sta/departments'*/
import type Trait from '@/sta/Trait'
class Character {
  private _name: string
  private _attributes: { [key: string]: number } = {}
  private _departments: { [key: string]: number } = {}
  private _momentum: Momentum
  private _traits: { [key: string]: Trait } = {}
  private _talents: { [key: string]: Trait } = {}
  private _values: { [key: string]: Trait } = {}
  private _focuses: { [key: string]: Trait } = {}

  constructor(name: string) {
    // Initialize momentum with a default or specified value.
    this._name = name
    this._momentum = new Momentum(0)
    this._attributes = {
      control: 11,
      daring: 11,
      fitness: 11,
      insight: 11,
      presence: 11,
      reason: 11,
    }
    this._departments = {
      command: 0,
      conn: 0,
      engineering: 0,
      medicine: 0,
      security: 0,
      science: 0,
    }
  }

  // Getter for the momentum value
  get name(): string {
    return this._name
  }

  get momentum(): Momentum {
    return this._momentum
  }

  get attributes(): { [key: string]: number } {
    return this._attributes
  }

  get departments(): { [key: string]: number } {
    return this._departments
  }

  get traits(): { [key: string]: Trait } {
    return this._traits
  }

  get talents(): { [key: string]: Trait } {
    return this._talents
  }

  get values(): { [key: string]: Trait } {
    return this._values
  }

  get focuses(): { [key: string]: Trait } {
    return this._focuses
  }

  // Getter for the attribute value
  getAttribute(attribute: string): number {
    return this._attributes[attribute]
  }

  // Getter for the department value
  getDepartment(department: string): number {
    return this._departments[department]
  }

  // Set the character's name
  setName(newName: string): void {
    this._name = newName
  }

  addTrait(trait: Trait): void {
    this._traits[trait.id] = trait
  }

  addTalent(talent: Trait): void {
    this._talents[talent.id] = talent
  }

  addValue(value: Trait): void {
    this._values[value.id] = value
  }

  addFocus(focus: Trait): void {
    this._focuses[focus.id] = focus
  }

  // ATTRIBUTES & DEPARTMENTS

  // Set the character's attribute value
  setAttribute(attribute: string, newValue: number): void {
    if (newValue < 0 || newValue > 15) {
      throw new Error('Attribute value must be between 0 and 15.')
    }
    this._attributes[attribute] = newValue
  }

  setAttributes(newAttributes: { [key: string]: number }): void {
    this._attributes = newAttributes
  }

  setDepartments(newDepartments: { [key: string]: number }): void {
    this._departments = newDepartments
  }
  // Set the character's department value
  setDepartment(department: string, newValue: number): void {
    if (newValue < 0 || newValue > 5) {
      throw new Error('Department value must be between 0 and 5.')
    }
    this._departments[department] = newValue
  }

  // Increment attribute (up to a max of 15)
  incrementAttribute(attribute: string): void {
    if (this._attributes[attribute] < 15) {
      this._attributes[attribute]++
    }
  }

  // Increment department (up to a max of 5)
  incrementDepartment(department: string): void {
    if (this._departments[department] < 5) {
      this._departments[department]++
    }
  }

  // Decrement attribute (down to a min of 0)
  decrementAttribute(attribute: string): void {
    if (this._attributes[attribute] > 0) {
      this._attributes[attribute]--
    }
  }

  // Decrement department (down to a min of 0)
  decrementDepartment(department: string): void {
    if (this._departments[department] > 0) {
      this._departments[department]--
    }
  }
}

export default Character
