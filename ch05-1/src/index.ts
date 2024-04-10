import {range} from './util/range'
import {fold} from './util/fold'
import {filter as ft} from './util/filter'
import {map} from './util/map'

console.log('Hello, TypeScript!');

const numArray = range(1, 100)
let result = numArray.reduce((acc, cur) => acc + cur, 0) // 5050
console.log(result)
result = fold(numArray, (acc, cur) => acc + cur, 0) // 5050
console.log(result)

let oddSum = 0
for (let i = 1; i <= 100; i += 2) {
  oddSum += i
}
console.log(oddSum) // 2500

console.log(numArray.filter(n => n % 2 === 1).reduce((acc, cur) => acc + cur, 0)); // 2500

console.log(ft(numArray, n => n % 2 === 1))
console.log(fold(ft(numArray, n => n % 2 === 1), (acc, cur) => acc + cur, 0))

//1부터 100까지 각각 제곱한 것의 합
result = numArray.reduce((acc, cur) => acc + cur * cur, 0)
console.log(result) // 338350
result = fold(map(numArray, n => n * n), (acc, cur) => acc + cur, 0)
console.log(result) // 338350