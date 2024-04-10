export const mergeArray = <T>(...arrays: readonly T[][]): T[] => {
  return arrays.reduce((result, array) => [...result, ...array], [])
}