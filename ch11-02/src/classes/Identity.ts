import {IMonad, ISetoid} from '../interfaces';

export class Identity<T> implements ISetoid<T>, IMonad<T> {
  constructor(private _value: T) {
  }

  static of<T>(value: T) {
    return new Identity(value)
  }

  value() {
    return this._value
  }

  equals<U>(that: U): boolean {
    if (that instanceof Identity) {
      return this.value() === that.value()
    }
    return false
  }

  map<U, V>(fn: (x: T) => U): Identity<U> {
    return new Identity<U>(fn(this.value()))
  }

  ap<U>(b: U) {
    const f = this.value();
    if (f instanceof Function) {
      return new Identity<U>(f(b))
    }
  }

  chain<U>(fn: (x: T) => U) {
    return fn(this.value())
  }
}
