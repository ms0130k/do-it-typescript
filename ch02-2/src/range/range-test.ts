import {range} from './range'

console.assert(range(1, 5).join() === '1,2,3,4,5')
console.assert(range(1, 5).length === 5)
console.assert(range(5, 1).length === 0)
console.assert(range(5, 5).length === 1)
