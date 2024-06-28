import {Option} from '../option/Option';

let m = Option.Some(1);
let value = m.map(v => v + 1).getOrElse(1);
console.log(value);

let n=Option.None
value = n.map(v => v + 1).getOrElse(0);
console.log(value);
