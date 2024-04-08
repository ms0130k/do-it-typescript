import IPerson from './person/IPerson'
import Person, { makePerson } from './person/Person'
import Chance from 'chance'
import * as R from 'ramda'

/*
chance: fake data 만드는데 사용
ramda: 함수형 유틸리티 패키지
 */

const chance = new Chance()
let persons: IPerson[] = R.range(0, 2).map((n: number) => new Person(chance.name(), chance.age()))
console.log(persons)