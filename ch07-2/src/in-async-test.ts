console.log('start');
(async () => {
  console.log('async start');
  await Promise.resolve(7)
  console.log('async end');
})()
console.log('end')

