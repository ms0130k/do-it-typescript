const go = () => new Promise((resolve) => {
  const delay = Math.random() * 1000
  setTimeout(() => {
    resolve(`go: ${delay}`)
  }, delay)
})

Promise.race([go(), go(), go()])
  .then(console.log)
  .catch(console.error)
  .finally(() => console.log('---'))


