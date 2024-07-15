import {IFake, makeFakeData} from '../fake';
import {zip} from '../utils';

const data = makeFakeData();
console.log(data);
const keys = Object.keys(data);
const values = Object.values(data);
const fake: IFake = zip(keys, values);
console.log(fake);