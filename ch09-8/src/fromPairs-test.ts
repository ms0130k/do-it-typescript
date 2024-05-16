import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';

const pairs: [string, any][] = R.toPairs(makeRandomPerson())
const person: IPerson = R.fromPairs(pairs) as IPerson
console.log(person);