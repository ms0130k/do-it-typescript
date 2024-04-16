export function* generator() {
  // console.log('generator started')
  let value = 1
  while (value < 4) {
    yield value++
  }
  // console.log('generator finished')
}

export function* rangeGenerator (from: number, to: number) {
  let value = from
  while (to > value) {
    yield value++
  }
}

// let numbers = generator();
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers.next());
// console.log(numbers);