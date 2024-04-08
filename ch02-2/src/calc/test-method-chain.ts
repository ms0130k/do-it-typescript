import Calculator from './Calculator';

const calc = new Calculator()
  .add(5)
  .multiply(2)
  .minus(4)
  .divide(2)
console.log(calc.getValue()) // 3
