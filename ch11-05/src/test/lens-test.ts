import * as R from 'ramda'
import {IO} from '../classes/IO'

const work = () => ({name: 'Jack', age: 32});
const result=IO.of(work)
.map(R.view(R.lensProp('name')))
.map(R.toUpper)
.runIO()
console.log(result);