export class RangeIterable {
  constructor(private from: number, private to: number) {}
  print() {
    console.log('current: ', this.from, this.to);
  }
  reset() {
    this.from = 0
  }
  [Symbol.iterator]() {
    let that = this
    return {
      next() {
        if (that.from < that.to) {
          return {
            value: that.from++,
            done: false
          }
        }
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
}