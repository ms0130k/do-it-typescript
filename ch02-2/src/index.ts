import IPerson from './person/IPerson'
import Person, { makePerson } from './person/Person'

const testMakePerson = () => {
  let jane: IPerson = makePerson('Jane')
  let jack: IPerson = makePerson('Jack')
  console.log(jane, jack)
}

testMakePerson()