// const ceate = <T>(type: T): T => new type()

// const create = <T extends {new(): T}>(type: T): T => new type()
// const create = <T>(type: new() => T): T => new type()
const create = <T>(type: {new(...args): T}, ...args): T => new type(...args)