export function* generator() {
  console.log('generator started')
  let value = 1
  while (value < 4) {
    yield value++
  }
  console.log('generator finished')
}

export function* rangeGenerator (from: number, to: number) {
  let value = from
  while (true) {
    value++
    if (value % 2 === 0 && value < 10) {
      yield value
    }
  }
}