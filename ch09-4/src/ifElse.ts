import * as R from 'ramda'

const input: number[] = R.range(1, 10 + 1),
  halfValue = input[input.length / 2]

const subtractOrAdd = R.pipe(
  R.map(R.ifElse(
    R.lte(halfValue),
    R.inc,
    R.dec
  )),
  R.tap(n => console.log(n))
)

const result = subtractOrAdd(input)