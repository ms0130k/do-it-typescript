import * as path from 'path';
import {appendFile, mkdir, writeFile} from '../fileApi';
import {range} from '../utils/range';
import {IFake} from './IFake';
import {makeFakeData} from './makeFakeData';

export const writeCsvFormatFakeData = async (filename: string,
                                             numberOfItems: number): Promise<string> => {
  const dirname = path.dirname(filename)
  await mkdir(dirname)
  const comma = ',', newLine = '\n'
  for (let n of range(numberOfItems)) {
    const fake: IFake = makeFakeData()
    if (n == 0) {
      const keys = Object.keys(fake).join(comma)
      await writeFile(filename, keys)
    }
    const values = Object.values(fake).join(comma)
    await appendFile(filename, newLine + values)
  }
  return `write ${numberOfItems} items to ${filename} file`
};