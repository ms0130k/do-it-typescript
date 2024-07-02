import {_IMaybe} from './_IMaybe';
import {IMonad} from '../interfaces';

export class Just<T> implements _IMaybe<T>, IMonad<T> {
  constructor(private _value: T) {
  }

  value(): T {
    return this._value
  }

  static of<T>(value: T) {
    return new Just<T>(value)
  }
  isJust(): boolean {
    return true
  }
  isNothing(): boolean {
    return false
  }
  getOrElse<U>(defaultValue: U): T {
    return this.value()
  }
  map<U, V>(fn: (x: T) => U): Just<U> {
    return new Just<U>(fn(this.value()))
  }

  ap<U>(b: U) {
    const f = this.value()
    if (f instanceof Function) {
      return Just.of<U>((f as Function)(b))
    }
  }

  chain<U>(fn: (T) => U): U {
    return fn(this.value())
  }
}