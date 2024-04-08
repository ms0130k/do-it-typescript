let call = (callback: () => void): void => callback()
call(() => console.log('First-class function')) // First-class function
