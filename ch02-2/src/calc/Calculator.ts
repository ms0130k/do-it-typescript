export default class Calculator {
  constructor(private value: number = 0) {
  }
  add(value: number) {
    this.value += value
    return this
  }
  multiply(value: number) {
    this.value *= value
    return this
  }
  minus(value: number) {
    this.value -= value
    return this
  }
  divide(value: number) {
    this.value /= value
    return this
  }
  getValue() {
    return this.value
  }
}