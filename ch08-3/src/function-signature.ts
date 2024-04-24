export type FirstOrderFunc<T, R> = (t: T) => R
export type SecondOrderFunc<T, R>
  = (t: T) => FirstOrderFunc<T, R>
export type ThirdOrderFunc<T, R>
  = (T) => SecondOrderFunc<T, R>