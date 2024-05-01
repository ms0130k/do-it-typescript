import * as R from 'ramda'

export type NumberToBooleanFunc = (number) => boolean
export const selectRange = (min: number, max: number): NumberToBooleanFunc =>
  R.allPass([
    R.lte(min),
    R.gt(max)
  ])

