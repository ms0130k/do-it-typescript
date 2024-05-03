import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';

const person: IPerson = makeRandomPerson()

const name = R.pipe(
  R.prop('name'),
  R.tap(name => console.log(name))
)(person)