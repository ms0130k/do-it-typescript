import * as R from 'ramda'

// const subtract = a => b => a - b
//
// const subtractFrom10 = subtract(10)
//
// const newArray = R.pipe(
//   R.map(subtractFrom10),
//   R.tap(a => console.log(a))
// )(R.range(1, 9 + 1))
//
// R.pipe(
//   R.map(R.subtract(10)),
//   R.tap(a => console.log(a))
// )(R.range(1, 9 + 1))

const reverseSub = R.flip(R.subtract)
R.pipe(
  // R.flip(R.subtract)(10),
  reverseSub(5),
  R.tap(a => console.log(a))
)(9)

console.log(R.map(R.add(1), [1, 2, 3]))
