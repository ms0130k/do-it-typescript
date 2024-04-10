import {mergeArray} from '../util/mergeArray'

const array1 = [1, 2, 3]
const array2 = [4, 5, 6]
const mergedArray = mergeArray(array1, array2)
console.log(mergedArray) // [ 1, 2, 3, 4, 5, 6 ]

const array3 = [{a: 1}, {b: 2}]
const array4 = [{a: 3}, {b: 4}]
const array5 = [{a: 5}, {b: 6}]
const mergedArray2 = mergeArray(array3, array4, array5)

console.log(mergedArray2)
