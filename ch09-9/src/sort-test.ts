import * as R from 'ramda'

type voidToNumberFunc = () => number
const makeRandomNumber = (max: number): voidToNumberFunc =>
  (): number => Math.floor(Math.random() * max)

const array = R.range(1, 5 + 1).map(makeRandomNumber(100))
// const sortedArray = R.sort()

console.log(R.sort(((a, b) => a - b), array));