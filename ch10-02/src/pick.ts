export const pick = <T, K extends keyof T>(obj: T, keys: K[]) =>
  keys.map(key => ({[key]: obj[key]}))
    .reduce((result, value) => ({...result, ...value}), {});

const obj = {a: 'aaa', b: 'bbb', c: 'cccccc'}
pick(obj, ['a', 'b']);