export type ICoordinates = { longitude: number; };
export type ILocation = { country: string, coords: ICoordinates; };
export type IPerson = { name: string, location: ILocation; };

let person: IPerson;

let longitude = person?.location?.coords?.longitude ?? 0;

console.log(longitude);