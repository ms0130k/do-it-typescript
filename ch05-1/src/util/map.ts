export const map = <T>(array: T[], cb: (val: T) => T): T[] => {
  // const result: T[] = []
  // for (const item of array) {
  //   result.push(cb(item))
  // }
  // return result
  let result: T[] = []
  for (const item of array) {
    result = [...result, (cb(item))]
  }
  return result
  // return array.length > 0 ? [cb(array[0]), ...map(array.slice(1), cb)] : []
}

console.log(map([1, 2, 3], n => n * n))

