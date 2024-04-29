import * as R from 'ramda'

const incNumber = R.pipe(
  R.map(R.add(1)),
  R.tap(a => console.log(`after add(1): ${a}--`))
)

const newNumbers = incNumber(R.range(0, 9 + 1))
console.log(newNumbers);

console.log(
R.pipe(
  R.tap(a => console.log(`b${a}a`))
)({x: 'x', y: 'y'}))