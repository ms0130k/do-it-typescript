import * as R from 'ramda'

const double = x => x * 2
const map = f => a => a.map(f)
const doubleMap = map(double)
const sum = (x, y) => x + y
const reduce = (f, initValue) => a => a.reduce(f, initValue)
const arraySum = reduce(sum, 0)
const array: number[] = R.range(1, 9 + 1)
R.pipe(
  doubleMap,
  arraySum,
  R.tap(n => console.log(n)),
)(array)