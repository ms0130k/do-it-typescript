import {selectRange, NumberToBooleanFunc} from './selectRange';
import * as R from 'ramda'

export const notRange = (min, max): NumberToBooleanFunc =>
  R.pipe(
    selectRange(min, max),
    R.not
  )