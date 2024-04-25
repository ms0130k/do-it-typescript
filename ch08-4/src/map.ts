export const map = f => a => a.map(f);

const squre = x => x * x
const squredMap1 = map(squre);
const squredMap2 = a => map(squre)(a)

console.log(squredMap1([1, 2, 3]))
console.log(squredMap2([1, 2, 3]))


