import * as R from 'ramda';

const exp = N => x => x ** N;
const square = exp(2);

type NumberToNumberFunc = (number) => number

// export const f = (a, b, c): NumberToNumberFunc => x =>
//   R.add(a * square(x) + b * x, c);

const f = (a, c, b): NumberToNumberFunc => x =>
  R.add(R.multiply(a)(square(x)) + R.multiply(b)(x))(c)

const f111 = f(1, 1, 1);

console.assert(f111(1) === 3);
console.assert(f111(2) === 7);

const f222 = f(2, 2, 2,);
console.assert(f222(2) === 14);