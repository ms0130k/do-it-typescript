let a = (callback: () => void): void => callback()
a(() => console.log('First-class function')) // First-class function
