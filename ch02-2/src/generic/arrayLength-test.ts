import {arrayLength, isEmpty} from './arrayLength';

const numArray = [1, 2, 3, 4, 5]
const strArray = ['a', 'b', 'c', 'd', 'e']

type IPerson = { name: string, age: number }
const personArray: IPerson[] = [
  {name: 'Jack', age: 10},
  {name: 'Jane', age: 15},
  {name: 'Tom', age: 20},
]

console.log(
  arrayLength(numArray), // 5
  arrayLength(strArray), // 5
  arrayLength(personArray), // 3
  arrayLength([]), // 0
  isEmpty([]), // true
  isEmpty([1, 2, 3]), // false
  isEmpty(['Hello', 'World']), // false
  isEmpty([{}, {}]), // false
);