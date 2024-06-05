import * as R from 'ramda';

type NumToNumFunc = (n: number) => number
const applyDiscount = (minimum: number, discount: number): NumToNumFunc =>
  R.pipe(
    R.ifElse(
      R.flip(R.gte)(minimum),
      R.flip(R.subtract)(discount),
      R.identity
    ),
    R.tap(amount => console.log(amount))
  );

const calcPrice = applyDiscount(5000, 500);
const discountPrice = calcPrice(6000);
const notDiscountPrice = calcPrice(4500);