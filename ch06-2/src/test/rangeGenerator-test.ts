import {rangeGenerator} from '../util/generator'

const iterator = rangeGenerator(1, 4)

while (9) {
    const {value, done} = iterator.next()
    if (done) break
    console.log(value)
}

for (let value of rangeGenerator(1, 4)) {
    console.log(value)
}
