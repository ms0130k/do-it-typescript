import {ILocation, IPerson} from './IPerson';

export const makeIPerson = (
  name: string,
  age: number,
  title: string,
  location: ILocation
): IPerson => ({name, age, title, location})