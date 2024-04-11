import {StringIterable} from '../util/StringIterable'

const iterable = new StringIterable(['hello', 'world'])
for (const value of iterable) {
  console.log(value)
}