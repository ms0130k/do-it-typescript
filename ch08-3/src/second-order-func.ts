import {FirstOrderFunc, SecondOrderFunc} from './function-signature'

export const add2: SecondOrderFunc<number, number> =
  (x: number): FirstOrderFunc<number, number> =>
  (y: number): number => x + y