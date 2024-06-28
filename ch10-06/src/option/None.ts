import {IValuable} from './IValuable';
import {IFunctor} from './IFunctor';
import {nullable} from './nullable';

export class None implements IValuable<nullable>, IFunctor<nullable> {
  getOrElse<T>(defaultValue: T | nullable): T {
    return defaultValue
  }
  map<U>(fn: (T) => U) {
    return new None
  }
}