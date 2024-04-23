import {readPromiseFile} from './readFilePromise';

readPromiseFile('./package.json')
  .then((content: string) => {
    console.log(content);
    return readPromiseFile('./tsconfig.json');
  })
  .then((content: string) => {
    console.log(content);
  })

