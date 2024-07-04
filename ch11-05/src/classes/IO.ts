import {IRunIO} from '../interfaces/IRunIO';
import {IFunctor} from '../interfaces/IFunctor';

const pipe = (...funcs) => (arg) => funcs.reduce((value, fn) => fn(value), arg);

export class IO implements IRunIO, IFunctor<Function> {
  constructor(public fn: Function) {

  }

  static of(fn: Function) {
    return new IO(fn);
  }

  runIO<R>(...args): R {
    return this.fn(...args) as R;
  }

  map(fn: Function): IO {
    const f: Function = pipe(this.fn, fn);
    return IO.of(f);
  }

  chain(fn) {
    const that = this;
    return IO.of((value) => {
      const io = fn(that.fn(value));
      return io.fn();
    });
  }
}