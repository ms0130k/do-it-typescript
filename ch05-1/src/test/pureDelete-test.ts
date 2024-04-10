import {pureDelete} from './pureDelete'

console.log(pureDelete([1, 2, 3, 4], v => v % 2 === 1))

const mixedArray: object[] = [
  {a: 'a'},
  [1, 2, 3],
  {b: 'a'}
]

console.log(pureDelete(mixedArray, v => Array.isArray(v)));
