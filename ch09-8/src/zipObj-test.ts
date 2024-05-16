import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';
import {zipObj} from 'ramda';

const person: IPerson = makeRandomPerson()
const keys = R.keys(person)
const values = R.values(person)

const newPerson = R.zipObj(keys, values)
R.assoc('name')('new Name')(person)
console.log(newPerson);
console.log(R.prop('name', person));
console.log(R.prop('name', newPerson));