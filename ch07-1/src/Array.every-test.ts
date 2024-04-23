const isAllTrue = (values: boolean[]): boolean => {
  return values.every((value) => value === true);
}

console.log(
  isAllTrue([true, true, true]), // true
  isAllTrue([true, false, true]), // false
  isAllTrue([false, false, false]), // false
  isAllTrue([true, true, false]), // false
);
