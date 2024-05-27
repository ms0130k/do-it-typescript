import * as R from 'ramda'
import {IPerson, makeRandomPerson} from './model/person';
import {displayPersons} from './displayPersons';

const persons: IPerson[] = R.range(1, 4 + 1).map(makeRandomPerson)
const newSortedPersons = R.sortBy(R.prop('name'))(persons)
const ageSortedPersons = R.sortBy(R.prop('age'))(persons)

displayPersons('sorted by name: ')(newSortedPersons)
displayPersons('sorted by age: ')(ageSortedPersons)