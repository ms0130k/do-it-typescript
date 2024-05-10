import * as R from 'ramda'
import {getter, setter, setterUsingFunc} from './lens';
import {IPerson, makeRandomPerson} from './model/person';

const longitudeLens = R.lensPath(['location', 'coordinates', 'longitude'])
const getLongitude = getter(longitudeLens)
const setLongitude = setter(longitudeLens)
const setLongitudeUsingFunc = setterUsingFunc(longitudeLens)

const person: IPerson = makeRandomPerson()
const NUMBER = 123.999;
const newPerson = setLongitude(NUMBER)(person)
const newPlusPerson = setLongitudeUsingFunc(R.inc)(newPerson)
console.assert(NUMBER === getLongitude(newPerson));
console.assert(R.inc(NUMBER) === getLongitude(newPlusPerson));
