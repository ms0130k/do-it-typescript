import * as R from 'ramda'
import {makeRandomPerson} from './model/person';

const keys: any[] = R.keys(makeRandomPerson())
console.log(keys);
console.log(Object.keys(makeRandomPerson()));