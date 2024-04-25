import {f, g, h} from './f-g-h'
import {compose} from './compose'

const composeFGH = compose<string, number>(f, g, h)
console.log(composeFGH('x')) // h(g(f(x)))