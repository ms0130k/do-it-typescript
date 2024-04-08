import INameable from './INameable'
let obj: object = { name: 'Jack' }

let name1 = (<INameable>obj).name
let name2 = (obj as INameable).name
console.log(name1, name2) // Jack Jack

let printMe: (string, number) => void = (name: string, age: number) => {
  console.log(name, age)
  return ''
}
printMe('Jack', 30) // Jack 30

type stringNumberFunc = (string, number) => void
let f: stringNumberFunc = (name: string, age: number) => {
  console.log(name, age)
  return ''
}
f('Jack', 30) // Jack 30