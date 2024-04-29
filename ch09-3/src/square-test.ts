import {square} from './f-using-ramda';
import * as R from 'ramda'

const input: number[] = R.range(1, 10 + 1)
const squareAfterInc = x => R.pipe(
  R.inc,
  square
)(x)

const squareResult = R.pipe(
  R.map(squareAfterInc),
  R.tap(a => console.log(a))
)(input)