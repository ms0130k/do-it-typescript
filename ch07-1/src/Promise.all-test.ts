const getAllResolvedResult = <T>(promises: Promise<T>[]) => Promise.all(promises)

getAllResolvedResult([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
.then(console.log)

getAllResolvedResult([Promise.resolve(1), Promise.reject(new Error('X')), Promise.resolve(3)])
.then(console.log)
.catch(console.error)
.finally(() => console.log('---'))

