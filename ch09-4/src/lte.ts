import * as R from 'ramda'

R.pipe(
  R.filter(R.lte(3)),
  R.filter(R.flip(R.gte)(3)),
  R.tap(a => console.log(a))
)(R.range(1, 10 + 1))

//3 <= x < 7

R.pipe(
  R.filter(R.lte(3)),
  R.filter(R.gt(7)),
  R.tap(n => console.log(n))
)(R.range(1, 10 + 1))

console.assert(R.lte(2)(3))