import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';
import {pair} from 'ramda';

const person = makeRandomPerson()
type tuple = [string, any]
const pairs: tuple[] = R.toPairs(person)
console.log(pairs);