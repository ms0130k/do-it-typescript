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

