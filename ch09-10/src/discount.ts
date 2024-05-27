import * as R from 'ramda'

type NumberToNumber = (n: number) => number
const applyDiscount = (minimum: number, discount: number): NumberToNumber =>
  R.pipe(
    R.ifElse(
      R.flip(R.gte)(minimum),
      R.flip(R.subtract)(discount),
      R.identity
    ),
    R.tap(amount => console.log(amount))
  )
const calcPrice = applyDiscount(5000, 500)

calcPrice(6000)
calcPrice(4500)