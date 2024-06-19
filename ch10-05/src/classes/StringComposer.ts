import {IAddable, IMultiplayable, IValueProvider} from '../interface';

export class StringComposer implements IValueProvider<string>, IAddable<string>, IMultiplayable<number> {
  constructor(private _value: string = '') {
  }
  value(): string {
    return this._value;
  }
  add(value: string): this {
    this._value += value
    return this
  }
  multiply(repeat: number): this {
    const value = this._value
    for (let i = 1; i < repeat; i++) {
      this.add(value)
    }
    return this
  }
}