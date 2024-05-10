import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';

const getName = R.pipe(
  R.prop('name')
)

const person = makeRandomPerson()

const originalName = getName(person)
const modifiedPerson = R.assoc('name')('Test Name')(person)
const modifiedName = getName(modifiedPerson)
console.assert(modifiedName === 'Test Name');