import {add3} from './third-order-func'
import {FirstOrderFunc} from './function-signature';

const addTo3: FirstOrderFunc<number, number> = add3(1)(2)

addTo3(3) // 6

const add2 = add3(1)
add2(2)(3) // 6


let freeVariable = 1

const add1 = add2(freeVariable)

let result = add1(3) // 5

console.log(result);

freeVariable = 2

console.log(result = add1(3))
console.dir(add1)
console.log(add1);


let outVariable = 1
const withOutVariable =
  (x: number) => outVariable + x

console.log(result = withOutVariable(2)) // 3

outVariable = 2
console.log(result = withOutVariable(2)) // 4

const withOutVariableSecondOrder =
  (x: number) => (y: number) => outVariable + x + y

console.log(result = withOutVariableSecondOrder(1)(2)) // 5
outVariable = 3

console.log(result = withOutVariableSecondOrder(1)(2)) // 6
