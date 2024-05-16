import Chance from 'chance'
import {makeILocation} from './makeILocation';
import {makeRandomCoordinates} from '../coordinates';
import {ILocation} from './ILocation';

const c = new Chance
export const makeRandomLocation = (): ILocation => makeILocation(
  c.country(), c.city(), c.address(), makeRandomCoordinates(),
)