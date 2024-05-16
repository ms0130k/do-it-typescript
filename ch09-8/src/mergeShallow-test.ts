import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';
import {ILocation, makeRandomLocation} from './model/location';

// const person = makeRandomPerson()
// const location = makeRandomLocation()
// const right = {location}
// const mergeLeft = R.mergeLeft(person, right)

// console.log(person.location);
// console.log(right.location);
// console.assert(person.location === mergeLeft.location);








const obj = {o: 9}
const left = {a: {a: 1}, obj}
const right = {a: {b: 1}}
const shallow = R.mergeLeft(left, right)
const deep = R.mergeDeepLeft(left, right)
obj.o = 10
console.log(obj);
console.log(shallow);
console.log(deep);