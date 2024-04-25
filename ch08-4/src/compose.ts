export const compose = <T, R>(...functions: readonly Function[]): Function =>
  (x: T): (T) => R => {
    const deepCopiedFunctions = [...functions]
    return deepCopiedFunctions.reverse().reduce((value, func) => func(value), x)
  }



const f = x => `f(${x})`
const g = x => `g(${x})`
const h = x => `h(${x})`

console.log(compose(f, g, h)(2))