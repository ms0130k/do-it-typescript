import * as process from 'process';

process.argv.forEach((val: string, index: number) => {
  console.log(index, ':', val);
});