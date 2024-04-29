import * as R from 'ramda'
import {quadratic} from './quadratic';

const input: number[] = R.range(1, 10 + 1)
R.pipe(
  R.map(quadratic),
  R.tap(a => console.log(a))
)(input)


