import {map} from './map'

const square: (number) => number = (x: number) => x * x
export const squaredMap = map(square)