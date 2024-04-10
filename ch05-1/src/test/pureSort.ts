export const pureSort = <T>(array: T[]): T[] => {
  return [...array].sort()
}

let array1 = [3, 1, 2];
console.log(pureSort(array1))
console.log(array1)

