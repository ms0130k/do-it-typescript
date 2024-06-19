import {IAddable, IMultiplayable, IValueProvider} from '../interface';

export class Calculator implements IValueProvider<number>, IAddable<number>, IMultiplayable<number> {
  constructor(private _value: number = 0) {
  }
  value(): number {
    return this._value
  }
  add(value: number): this {
    this._value += value
    return this
  }
  multiply(value: number): this {
    this._value *= value
    return this
  }
}