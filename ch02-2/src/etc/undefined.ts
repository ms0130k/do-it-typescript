interface INameable {
  name: string
}
function getName(o: INameable): string {
  // return o !== undefined ? o.name : 'unknown'
  return o != undefined ? o.name : 'unknown'
}

console.log(getName(undefined)) // unknown
console.log(getName(null)) // unknown
