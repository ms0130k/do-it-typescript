import {gen, random} from '../util/yield-return'

const iter = gen()
console.log(iter.next(5))
console.log(iter.next(6))
