import {StringComposer} from '../classes/StringComposer';

const value = new StringComposer('text')
  .add('gg')
  .add('xx ')
  .multiply(3)
  .value();
console.log(value);