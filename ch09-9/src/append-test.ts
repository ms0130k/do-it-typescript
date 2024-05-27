import * as R from 'ramda';

const array = [3, 4];
const array2 = [3, 5];
const newArray = R.append(1)(array)
console.log(newArray);
