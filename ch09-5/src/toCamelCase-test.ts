import {toCamelCase} from './toCamelCase';

const expect = 'helloMyWorld';
console.assert(expect === toCamelCase('_')('hellO_MY_world'));