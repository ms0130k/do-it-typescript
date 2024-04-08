const identity = <T>(arg: T): T => arg

console.log(identity<string>('Hello, TypeScript!')); // Hello, TypeScript!
console.log(identity(1)); // 1