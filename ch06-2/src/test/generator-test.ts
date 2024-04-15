import {generator, rangeGenerator} from '../util/generator'

console.log('generator-test started');
const gen = generator()
gen.next()
// for (let value of gen) {
//   console.log(value)
// }

const rangeGen = rangeGenerator(1, 4)
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())
console.log(rangeGen.next())