import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';
import {ILocation, makeRandomLocation} from './model/location';
import {ICoordinates, makeRandomCoordinates} from './model/coordinates';

const person = makeRandomPerson()
const right = {}
const mergeLeft = R.mergeDeepLeft(person, right)

console.assert(person !== mergeLeft);
console.assert(person.location === mergeLeft.location);

