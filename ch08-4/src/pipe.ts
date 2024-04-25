export const pipe = <T>(...functions: readonly Function[]): Function =>
(x: T): T => {
  return functions.reduce((value, func) => func(value), x)
}

const f = x => `f(${x})`
const g = x => `g(${x})`
const h = x => `h(${x})`


console.log(pipe(f, g, h)(2))


