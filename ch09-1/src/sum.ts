export const sum = (...numbers: number[]): number => numbers.reduce((acc, cur) => acc + cur, 0);

console.assert(sum(1, 2, 3) === 6);