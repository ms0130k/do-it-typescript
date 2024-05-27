import * as R from 'ramda'

const array = [1, 2, 3];

R.pipe(
  R.chain(n => [n, n]),
  R.tap(n => console.log(n))
)(array)

R.pipe(
  R.chain(R.append, R.head),
  R.tap(n => console.log(n))
)(array)

// const sayX = x => console.log(`x is ${x}`);
// R.tap(sayX)(100)


