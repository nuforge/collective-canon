class Attribute {
  private _label: string
  private _value: number
  private _icon: string
  private _color: string

  private _limit: number = 15

  constructor(
    initialLabel: string = 'Attribute',
    initialValue: number = 7,
    initialIcon: string = 'mdi-account-circle-outline',
    initialColor: string = '#000000',
    overrideLimit: boolean = false,
  ) {
    // Initialize attribute with a default or specified value.
    if (initialValue < 0 || (initialValue > this._limit && !overrideLimit)) {
      throw new Error(`Attribute value must be between 0 and ${this._limit}.`)
    }
    this._label = initialLabel
    this._value = initialValue
    this._icon = initialIcon
    this._color = initialColor
  }

  // Getter for the attribute label
  get label(): string {
    return this._label
  }

  // Getter for the attribute value
  get value(): number {
    return this._value
  }

  get valueStr(): string {
    return this._value.toString().padStart(2, '0')
  }

  // Getter for the attribute icon
  get icon(): string {
    return this._icon
  }

  // Getter for the attribute color
  get color(): string {
    return this._color
  }

  set(newValue: number, overrideLimit: boolean = false) {
    if (newValue < 0 || (newValue > this._limit && !overrideLimit)) {
      throw new Error(`Attribute value must be between 0 and ${this._limit}.`)
    }
    this._value = newValue
  }

  // Increment attribute (up to a max of 7)
  increment(): void {
    if (this._value < this._limit) {
      this._value++
    }
  }

  // Decrement attribute (down to a min of 0)
  decrement(): void {
    if (this._value > 0) {
      this._value--
    }
  }

  clear(): void {
    this._value = 0
  }
}

export default Attribute
