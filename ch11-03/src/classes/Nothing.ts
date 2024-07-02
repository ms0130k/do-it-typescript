import {_IMaybe} from './_IMaybe';
import {IMonad} from '../interfaces';

export class Nothing implements _IMaybe<null>, IMonad<null> {
  static of<T>(value: T = null) {
    return new Nothing;
  }

  isJust(): boolean {
    return false;
  }

  isNothing(): boolean {
    return true;
  }

  map<U, V>(fn: (x) => U): Nothing {
    return new Nothing
  }

  ap<U>(b: U) {
    return new Nothing
  }
  chain<U>(fn: (T) => U) {
    return new Nothing
  }
  getOrElse<T>(defaultValue: T) {
    return defaultValue;
  }
}