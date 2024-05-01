import * as R from 'ramda'

const words: string[] = R.split(',')('ehllo,gogo, ,dyno')
console.log(words);