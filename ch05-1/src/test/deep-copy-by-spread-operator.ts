const oArray = [{a: 1}, {b: 2}, {c: 3}]
const copiedArray = [...oArray]
oArray[0].a = 10
console.log(oArray) // [ { a: 10 }, { b: 2 }, { c: 3 } ]
console.log(copiedArray) // [ { a: 10 }, { b: 2 }, { c: 3 } ]
console.log(oArray === copiedArray) // false