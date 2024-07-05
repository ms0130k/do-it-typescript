import {fileExists} from './fileExists';
import {mkdirp} from 'mkdirp'

export const mkdir = (dirname: string): Promise<string|void> =>
  new Promise(async (resolve, reject) => {
    const alreadyExists= await fileExists(dirname)
    alreadyExists ? resolve(dirname) :
      mkdirp(dirname).then(resolve).catch(reject)
  });