export const filter = <T>(array: T[], cb: (item: T) => boolean): T[] => {
  let result: T[] = []
  for (const item of array) {
    if (cb(item)) {
      result = [...result, item]
    }
  }
  return result
}

console.log(filter([1, 2, 3, 4, 5], n => n % 2 === 0))
//홀수만 가려내는 filter test
console.log(filter([1, 2, 3, 4, 5], n => n % 2 === 1))