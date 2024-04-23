const go = async () => {
  const result = await 7
  return result
}

go().then(console.log)
console.log('end');


const asyncException = async () => {
  throw new Error('error')
}
asyncException()
console.log('start');
