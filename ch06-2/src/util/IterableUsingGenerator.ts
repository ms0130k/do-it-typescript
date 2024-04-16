export class IterableUsingGenerator<T> implements Iterable<T> {
  constructor(private values: T[] = [], private currentIndex: number = 0) {}

  // *[Symbol.iterator](): Iterator<number> {
  //   let value = this.from
  //   while (this.to > value) {
  //     yield value++
  //   }
  // }
  // [Symbol.iterator] = function* () {
  //   while (this.currentIndex < this.values.length) {
  //     yield this.values[this.currentIndex++]
  //   }
  // }
  *[Symbol.iterator](): Iterator<T> {
    while (this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++]
    }
  }
  *iter(): Iterator<T> {
    while (this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++]
    }
  }
  iter2 = function* () {
    while (this.currentIndex < this.values.length) {
      yield this.values[this.currentIndex++]
    }
  }
}

const iterable = new IterableUsingGenerator([1, 2, 3])
for (let value of iterable) {
  console.log(value)
}

const iterator = iterable.iter2()
for (let value of iterator) {
  console.log(value)
}
