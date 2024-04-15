let period = 1000;
let count = 0;
const id = setInterval(() => {
  if (count < 3) {
    console.log(new Date())
    count++
  } else {
    clearInterval(id);
    console.log('setInterval finished');
  }
}, period);