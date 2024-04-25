export const reduce = (f, initValue) => a => a.reduce(f, initValue)

const multiple = (x: number, y: number): number => x * y
const multipleReduce = reduce(multiple, 2)
console.assert(multipleReduce([1, 2, 3]) === 12)