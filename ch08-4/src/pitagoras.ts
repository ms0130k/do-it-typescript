// import {pipe} from './pipe';
// import {squaredMap} from './squaredMap'
// import {sumArray} from './sumArray';
//
// const pitagoras = pipe(
//   squaredMap,
//   sumArray,
//   Math.sqrt
// )
//
// console.assert(pitagoras([3, 4]) === 5)

/*
피타고라스 정리, 직각 삼각형의 직각하는 두 변의 제곱 합은 남은 한 변의 제곱과 같다
두 제곱, 합, 제곱근
*/

const square = x => x * x
// const map = <T, R>(f: (T) => R) => (a: T[]): R[] => a.map(f)
const map = f => a => a.map(f)
const squaredMap = map(square)
const reduce = (f, initValue) => a => a.reduce(f, initValue)
const sum = (x, y) => x + y
const sumArray = reduce(sum, 0)
const sqrt = Math.sqrt

const pipe = (...functions: Function[]) =>
  x => {
    return functions.reduce((result, func) => func(result), x)
  }

const pitagoras = pipe(squaredMap, sumArray, sqrt)
console.assert(pitagoras([3, 4]) === 5)
