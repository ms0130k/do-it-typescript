import {add2} from './second-order-func'
import {FirstOrderFunc} from './function-signature';

const fof: FirstOrderFunc<number, number> = add2(1)
const result: number = fof(2) // 3

console.log(result)
