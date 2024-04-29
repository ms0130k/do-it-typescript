//ax2 + bx + c
import * as R from 'ramda';

export const exponential = N => x => x ** N;
export const square = exponential(2);
const cube = exponential(3);

console.assert(square(2) === 4);
console.assert(square(3) === 9);
console.assert(cube(3) === 27);

type NumberToNumberFunc = (number) => number
export const f = (a, b, c): NumberToNumberFunc => x =>
  R.add(
    R.add(
      R.multiply(a)(square(x))
    )(R.multiply(b)(x))
  )(c);


const f123 = f(1, 2, 3);
console.assert(f123(2) === 9)