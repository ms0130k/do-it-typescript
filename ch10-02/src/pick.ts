export const pick = (obj, keys) => keys.map(key => ({[key]: obj[key]}))
  .reduce((result, value) => ({...result, ...value}), {});

// const obj1 = {a: 1, b: 2, c: 3};
// const obj2 = {a: 2, d: 4, e: 5, f: 6};
//
// const obj3 = {...obj1, ...obj2};
//
//
// const pick = (obj: {}, keys: any[]) => keys.map(key => ({[key]: obj[key]}))
//   .reduce((result, curr) => ({...result, ...curr}), {});
//
// console.log(pick(obj2, ['a', 'e']))