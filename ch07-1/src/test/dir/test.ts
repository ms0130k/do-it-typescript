import {readFileSync, readFile} from 'fs'

const buffer: Buffer = readFileSync('./src/test.txt')
console.log('동기: ', buffer.toString())

readFile('./src/test.txt', (err: Error, buffer: Buffer) => {
    console.log('비동기: ', buffer.toString())
})

const readFilePromise = (filename: string): Promise<Buffer> =>
  new Promise((resolve, reject) => {
    readFile(filename, (err, buffer) => {
      if (err) reject(err)
      else resolve(buffer)
    })
  });

(async () => {
  const buffer = await readFilePromise('./src/test.txt')
  console.log('promise: ', buffer.toString())
})()