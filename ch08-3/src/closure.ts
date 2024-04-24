const makeNames = (): () => string => {
  const names = ['Jack', 'Jane', 'Steve']
  let index = 0
  return () => {
    if (index === names.length) {
      index = 0
    }
    return names[index++]
  }
}

const makeName = makeNames()
console.log(makeName()) // Jack
console.log(makeName()) // Jane
console.log(makeName()) // Steve
console.log(makeName()) // Jack


const gen = function* (length) {
  let index = 0
  while (index < length) {
    yield index++
  }
}

console.log('----------------');
for (const i of gen(3)) {
  console.log(i)
}

const intArrayGenerator = (length: number): number[] => {
  const result = []
  for (let i = 0; i < length; i++) {
    result.push(i)
  }
  return result
}

console.log('----------------');
let strings = intArrayGenerator(3).map(n => makeName());
console.log(strings);

