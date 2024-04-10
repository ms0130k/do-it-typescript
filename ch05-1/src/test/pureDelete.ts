export const pureDelete = <T>(array: T[], cb: (T) => boolean) =>
  array.filter(value => cb(value) === false)