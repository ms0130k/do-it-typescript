import * as R from 'ramda'

type StringToStringFunc = (string) => string

const indexedMap = R.addIndex(R.map)
export const toCamelCase = (delim: string): StringToStringFunc => (words: string): string => {
  const makeFirstToCapital: StringToStringFunc = (word: string): string => {
    return word.split('').map((c, i) => i === 0 ? c.toUpperCase() : c).join('')
  }
  return R.pipe(
    R.split(delim),
    R.map(R.trim),
    R.map(R.toLower),
    // R.addIndex(R.map)((word, idx) => idx > 0 ? makeFirstToCapital(word) : word),
    indexedMap((word, idx) => idx > 0 ? makeFirstToCapital(word) : word),
    R.join(''),
  )(words)
}

const expect = 'helloShockWorld'
console.assert(expect === toCamelCase(',')('Hello, SHOCK, world'));
console.assert(expect === toCamelCase('_')('Hello_SHOCK_world'));

