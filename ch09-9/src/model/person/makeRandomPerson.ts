import {makeIPerson} from './makeIPerson';
import Chance from 'chance'
import {makeRandomLocation} from '../location';

const c = new Chance

export const makeRandomPerson = () =>
  makeIPerson(c.name(), c.age(), c.profession(), makeRandomLocation())