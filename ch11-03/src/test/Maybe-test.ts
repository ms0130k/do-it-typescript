import * as R from 'ramda'
import {Maybe, IMaybe, Just, Nothing} from '../classes/Maybe';

const divide = (a: number) => (b: number): Just<number> | Nothing =>
  b ? Maybe.Just(a/b) : Maybe.Nothing

console.log(
  divide(1)(1).map(R.add(1)).getOrElse(0),
  divide(1)(0).map(R.add(1)).getOrElse(0),
);