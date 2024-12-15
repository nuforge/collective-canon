class Trait {
  private _id: string
  private _name: string
  private _type: string
  private _description: string
  private _color: string
  private _icon: string
  private _link?: string | undefined
  private _value?: number | undefined

  constructor(
    initName: string = 'Trait',
    initIcon: string = 'mdi-star-four-points-outline',
    initDesc: string = 'a trait',
    initType: string = 'trait',
    initColor: string = '#ffffff',
    initialValue?: number,
    initLink?: string,
  ) {
    this._id = initName.toLowerCase().replace(/ /g, '-')
    this._name = initName
    this._icon = initIcon
    this._type = initType
    this._description = initDesc
    this._color = initColor
    this._link = initLink
    this._value = initialValue
  }

  get id(): string {
    return this._id
  }

  get name(): string {
    return this._name
  }

  get type(): string {
    return this._type
  }

  get description(): string {
    return this._description
  }

  get color(): string {
    return this._color
  }

  get icon(): string {
    return this._icon
  }

  get link(): string | undefined {
    return this._link ? this._link : undefined
  }

  get value(): number | undefined {
    return this._value ? this._value : undefined
  }
}

export default Trait
