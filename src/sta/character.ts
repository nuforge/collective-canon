import Momentum from './Momentum'
/*import { attributes } from '@/sta/attributes'
import type { Attribute } from '@/sta/attributes'
import { departments } from '@/sta/departments'
import type { Department } from '@/sta/departments'*/
class Character {
  private _name: string
  private _attributes: { [key: string]: number } = {}
  private _departments: { [key: string]: number } = {}
  private _momentum: Momentum
  private _traits: Array<string>

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
    this._traits = ['Happy', 'Sad', 'Angry']
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
  get traits(): Array<string> {
    return this._traits
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
