import * as R from 'ramda';
import {getRandomJoke, JokeType} from '../getRandomJoke';

const callback = (item: JokeType) => {
  const joke = R.view(R.lensProp('joke'))(item);
  console.log(joke);
};
getRandomJoke()
  .then(callback)
  .catch(console.error)
