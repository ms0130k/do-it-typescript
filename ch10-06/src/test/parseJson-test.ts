import {parseJson} from '../option/parseJson';

const json=JSON.stringify({name:'Jack', age: 32})
let value = parseJson(json).getOrElse({});
console.log(value);

value = parseJson('hello world').getOrElse({});
console.log(value);

const callMap = <T, U>(fn: (T) => U) => <T extends { map(fn) }>(b: T) => b.map(fn);