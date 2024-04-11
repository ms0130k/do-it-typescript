const symbol = Symbol('key')
const obj = {
  [symbol]: 'value'
}
console.log(obj[symbol])
console.log(obj[Symbol('key')])
