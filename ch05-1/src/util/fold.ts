export const fold = <T>(array: T[], cb: (result: T, current: T) => T, initValue: T): T => {
  let result: T = initValue
  for (const item of array) {
    result = cb(result, item)
  }
  return result
}