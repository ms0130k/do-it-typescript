import {readFileSync, readFile} from 'fs'

const buffer: Buffer = readFileSync('./src/test.txt')
console.log('동기: ', buffer.toString())

readFile('./src/test.txt', (err: Error, buffer: Buffer) => {
    console.log('비동기: ', buffer.toString())
})












const rfPromise = (filename: string): Promise<Buffer> => {
  return new Promise((resolve, reject) => {
    readFile(filename, (err, buffer) => {
      if (err) {
        reject(err)
      } else {
        resolve(buffer)
      }
    })
  })
}

rfPromise('./src/test.txt')
  .then(buffer => console.log('promise: ', buffer.toString()))
;

(async () => {
  const result = await rfPromise('./src/test.txt');
  console.log('async/await: ', result.toString());
})();