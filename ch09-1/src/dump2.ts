import * as R from 'ramda'

export const dump = <T>(a: T[]): T[] => R.pipe(
  R.tap(n => console.log(n))
)(a) as T[]