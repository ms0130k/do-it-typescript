const normal = (cb: (number) => number): void => {};
// const error = (cb: (number, number) => number): void => {}
const error = (cb: (a: number, b: number) => number): void => {}
const fixed = (cb: (a: number, number?) => number): void => {}

const f = <T>(cb: (a: T, b?: number) => number): void => {}

f((a: string, b: number) => 1);

let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b);