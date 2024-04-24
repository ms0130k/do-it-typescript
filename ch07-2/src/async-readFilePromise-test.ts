import {readFile} from 'fs'

const rfPromise = (filename): Promise<string> => new Promise((resolve, reject) => {
    readFile(filename, (err, buffer) => {
      if (err) {
        reject(err)
      } else {
        resolve(buffer.toString())
      }
    })
  })

// const samplePromise_1 = rfPromise('./src/text/sample-1.txt')
// const samplePromise_2 = rfPromise('./src/text/sample-2.txt')
// samplePromise_1
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log('---samplePromise_1---'))
// samplePromise_2
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log('---samplePromise_2---'))
//
// Promise.all([samplePromise_1, samplePromise_2])
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log('---promise.all---'))
// ;
//
// (async () => {
//   const result = await samplePromise_1
//   console.log(`await samplePromise_1: ${result}`)
// })



// const promises = ['./src/text/sample-1.txt', './src/text/sample-2.txt'].map(filename => rfPromise(filename))
// Promise.all(promises)
//   .then(strings => strings.join(' :: '))
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => console.log('---promise.all---'))



const readFilesAll = (filenames: string[]): Promise<string[]> => Promise.all(filenames.map(rfPromise))
// const readFilesAll = async (filenames: string[]): Promise<string[]> => await Promise.all(filenames.map(rfPromise))

readFilesAll(['./src/text/sample-1.txt', './src/text/sample-2.txt'])
  .then(([text1, text2]) => console.log(`text1: ${text1}\ntext2: ${text2}`))
  .catch(console.error)
  .finally(() => console.log('---readFilesAll---'))