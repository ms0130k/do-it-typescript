import * as fs from 'fs';

export const readPromiseFile = (filename: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, (err: Error, buffer: Buffer) => {
      if (err) {
        reject(err)
        return
      }
      resolve(buffer.toString())
    })
  })
}