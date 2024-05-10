import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';

const person = makeRandomPerson()

const name = R.prop('name')(person)