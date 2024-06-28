import {Identity} from '../classes/Identity';

console.log(
  Identity.of(1).map(value => `the count is ${value}`).value(),
  Identity.of(1).chain(value => Identity.of(`this count is ${value}`)).value(),
  Identity.of(1).chain(value => `that count is ${value}`),
);

//map은 내부의 값으로 콜백 함수를 실행하고 동일 타입 반환 => 리턴 타입이 Identity로 유지
//chain은 콜백 함수의 리턴값으로 반환 => 리턴 타입이 콜백 함수의 리턴값의 타입으로 변환