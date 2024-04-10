console.log('Hello TypeScript');

const func = () => ({a: 1, b: this})
console.log(func())
const func2 = function () {
  return {a: 1, b: this}
}
console.log(func2())
const func3 = function () {
  return {
    a: 1,
    b() {
      console.log(this)
    }
  }
}
func3().b()