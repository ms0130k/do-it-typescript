import * as R from 'ramda'

const callAndAppend = R.pipe(
  R.ap([R.multiply(2), R.add(10)]),
  R.tap(console.log)
);

const input = [1, 2, 3];
const result = callAndAppend(input);
