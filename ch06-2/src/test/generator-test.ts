import {generator, rangeGenerator} from '../util/generator'

console.log('generator-test started');
const gen = generator()
gen.next()
// for (let value of gen) {
//   console.log(value)
// }

const rangeGen = rangeGenerator(1, 4)
// console.log(rangeGen.next())
// console.log(rangeGen.next())
// console.log(rangeGen.next())
// console.log(rangeGen.next())
// console.log(rangeGen.next())
// console.log(rangeGen.next())

function* makeRangeIterator(start = 0, end = Infinity, step = 1) {
  let n = 0;
  console.log('makeRangeIterator started', n);
  for (let i = start; i < end; i += step) {
    console.log('makeRangeIterator loop', n);
    n++;
    yield i;
  }
  return n;
}

const it = makeRangeIterator(1, 4)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)
console.log(it.next().value)