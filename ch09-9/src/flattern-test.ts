import * as R from 'ramda';

const array = R.range(1, 2 + 1).map(x => {
  return R.range(1, 2 + 1).map(y => {
    return [x, y]
  })
})
console.log(array);

const flattendArray = R.flatten(array)
console.log(flattendArray);