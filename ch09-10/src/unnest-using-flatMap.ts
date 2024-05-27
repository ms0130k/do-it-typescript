import * as R from 'ramda'
import {flatMap} from './flatMap';

const unnest = flatMap(R.identity)
const array = [[1], [2], [3]]
R.pipe(
  R.flatten,
  R.tap(n => console.log(n))
)(array)

