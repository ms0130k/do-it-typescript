import * as R from 'ramda'
import {makeRandomPerson} from './model/person';

const values: any[] = R.values(makeRandomPerson())
console.log(values);