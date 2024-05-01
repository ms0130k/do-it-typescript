import {notRange} from './notRange';
import * as R from 'ramda'

R.pipe(
  R.filter(notRange(3, 6 + 1)),
  R.tap(n => console.log(n))
)(R.range(1, 10 + 1))
