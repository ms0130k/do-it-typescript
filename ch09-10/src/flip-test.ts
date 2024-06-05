import * as R from 'ramda'

const flip = cb => a => b => cb(b)(a)
const reversSubtranct = flip(R.subtract)

const newArray = R.pipe(
  R.map(reversSubtranct(10)),
  R.tap(a => console.log(a))
)(R.range(1, 1 + 3));

