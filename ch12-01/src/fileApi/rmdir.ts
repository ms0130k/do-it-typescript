import {fileExists} from './fileExists';
import {rimraf} from 'rimraf'

export const rmdir = (dirname: string): Promise<string> =>
  new Promise(async(resolve, reject) => {
    const alreadyExists = await fileExists(dirname)
    !alreadyExists ? resolve(dirname) :
      rimraf(dirname).then((result) => resolve(result.toString())).catch(reject)
  })