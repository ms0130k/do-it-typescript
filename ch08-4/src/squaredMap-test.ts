import {pipe} from './pipe'
import {squaredMap} from './squaredMap'

const fourSquare = pipe(squaredMap, squaredMap)

console.log(fourSquare([2, 3]))