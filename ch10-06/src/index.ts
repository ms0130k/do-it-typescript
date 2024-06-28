console.log('Hello world');

interface Inter {
  name: string
  age?: number
}
let inter: Inter
console.log(inter?.name);
console.log(inter?.name ?? 0);

class test {
  constructor() {
  }
}

let t = new test();