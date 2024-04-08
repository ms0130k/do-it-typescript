type NumberToNumberFunc = (number) => number
const highOrderFunction = (a: number): NumberToNumberFunc => (b: number) => a + b
const add2 = highOrderFunction(1);
console.log(add2(2)) // 3
console.log(add2(3)) // 4

const multiply = a => b => c => a * b * c
const multiply3 = multiply(1)(2)
console.log(multiply3(3)) // 6

type Person = { name: string, age: number }
const printPerson = ({name, age}: Person): void => console.log(`name: ${name}, age: ${age}`)
printPerson({name: 'Jack', age: 10}) // name: Jack, age: 10

type indexable = { [index: string]: string }
const printIndexable = ({key, val}): indexable => ({[key]: val})
console.log(printIndexable({key: 'name', val: 'Jack'})) // { name: 'Jack' }
console.log(printIndexable({key: 'age', val: '10'})) // { age: '10' }
