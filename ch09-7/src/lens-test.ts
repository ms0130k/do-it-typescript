import * as R from 'ramda'
import {makeLens, getter, setter, setterUsingFunc} from './lens';
import {IPerson, makeRandomPerson} from './model/person';

const prop = 'name';
const nameLens = makeLens(prop)
const getName = getter(nameLens)
const setName = setter(nameLens)
const setNameUsingFunc = setterUsingFunc(nameLens)

const person: IPerson = makeRandomPerson()
const NEW_NAME = 'New Name';
const newPerson = setName(NEW_NAME)(person)
const capitalPerson = setNameUsingFunc(R.toUpper)(newPerson)

console.assert(NEW_NAME === getName(newPerson));
console.assert(R.toUpper(NEW_NAME) === getName(capitalPerson));