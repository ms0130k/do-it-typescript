export class StringIterable implements Iterable<string> {
  constructor(private strings: string[], private currentIndex: number = 0) {}

  [Symbol.iterator](): Iterator<string> {
    const that = this
    return {
      next() {
        const value = that.currentIndex < that.strings.length ? that.strings[that.currentIndex++] : undefined
        const done = value === undefined
        return { value, done }
        // if (that.currentIndex < that.strings.length) {
        //   return {
        //     value: that.strings[that.currentIndex++],
        //     done: false
        //   }
        // }
        // return {
        //   value: undefined,
        //   done: true
        // }
      }
    }
  }
}