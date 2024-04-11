class ClosureTest {
  constructor(public value: number) {
  }
  method(): any {
    let that = this
    let val = this.value
    return {
      print() {
        console.log(that.value, val);
      }
    }
  }
}

const closureTest = new ClosureTest(1);
let method = closureTest.method();
method.print()
closureTest.value = 2
method.print()
