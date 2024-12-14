class Momentum {
  private _value: number

  constructor(initialValue: number = 0) {
    // Initialize momentum with a default or specified value.
    if (initialValue < 0 || initialValue > 7) {
      throw new Error('Momentum value must be between 0 and 7.')
    }
    this._value = initialValue
  }

  // Getter for the momentum value
  get value(): number {
    return this._value
  }

  set(newValue: number) {
    if (newValue < 0 || newValue > 7) {
      throw new Error('Momentum value must be between 0 and 7.')
    }
    this._value = newValue
  }

  // Increment momentum (up to a max of 7)
  increment(): void {
    if (this._value < 7) {
      this._value++
    }
  }

  // Decrement momentum (down to a min of 0)
  decrement(): void {
    if (this._value > 0) {
      this._value--
    }
  }

  clear(): void {
    this._value = 0
  }

  // Get the icon name based on the current momentum value
  getIcon(value: number = this._value): string {
    switch (value) {
      case 0:
        return 'mdi-hexagon-outline'
      case 7:
        return 'mdi-hexagon-multiple'
      default:
        return `mdi-hexagon-slice-${value}`
    }
  }
}

export default Momentum
