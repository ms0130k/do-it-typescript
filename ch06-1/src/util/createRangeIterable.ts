export const createRangeIterable = (from: number, to: number) => {
  let currentValue = from
  return {
    next() {
      const value = currentValue < to ? currentValue++ : undefined
      const done = value === undefined
      return {value, done}
    }
  }
}

let iterator = createRangeIterable(1, 3 + 1)
while (true) {
  const {value, done} = iterator.next()
  // console.log(value, done)
  if (done) break
}

export const createRangeIterable2 = (from: number, to: number) => {
  return {
    next() {
      console.log(from, to)
      if (from < to) {
        return {
          value: from++,
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

let iterator2 = createRangeIterable2(1, 3 + 1)
// while (true) {
//   const {value, done} = iterator2.next()
//   console.log(value, done)
//   if (done) break
//   if (value === 4) break
// }
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())
console.log(iterator2.next())

// let arr = [1, 2, 3, 4, 5]
// let arr = ['a', 2, 3, 4, 5]
// let itr = arr[Symbol.iterator]()
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())
// console.log(itr.next())