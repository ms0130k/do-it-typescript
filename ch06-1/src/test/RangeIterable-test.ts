import { RangeIterable } from '../util/RangeIterable'

const rangeIterable = new RangeIterable(1, 3 + 1);

console.log('test start');
for (const value of rangeIterable) {
  console.log(value);
}
rangeIterable.print()
rangeIterable.reset()
for (const value of rangeIterable) {
  console.log(value);
}
rangeIterable.print()
console.log('test end');