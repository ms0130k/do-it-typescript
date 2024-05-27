import * as R from 'ramda'

const array = R.range(1, 2 + 1).map(x => R.range(1, 2 + 1).map( y => [x, y]))
console.log(array);
const unnestedArray = R.unnest(array)
console.log(unnestedArray);
const twoUnnestedArray = R.unnest(unnestedArray)
console.log(twoUnnestedArray);