import IPerson from './IPerson'
import * as U from '../utils/makeRandomNumber'

export default class Person implements IPerson {
  constructor(public name: string, public age: number) {}
}

export const makePerson = (name: string, age: number = U.makeRandomNumber()): IPerson => ({name, age})
