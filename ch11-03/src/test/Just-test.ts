import {Just} from '../classes/Just';
import * as R from 'ramda';

const numberJust = Just.of(100);
console.log(
  numberJust.isJust(),//true
  numberJust.isNothing(),//false
  numberJust.getOrElse(1),//100
  numberJust.map(R.identity).getOrElse(1),//100
  Just.of(R.identity).ap(100).getOrElse(1),//100
  numberJust.chain(Just.of).getOrElse(1)//100
);