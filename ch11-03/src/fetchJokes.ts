import fetch from 'node-fetch';

export const fetchJokes = <T>() => new Promise<T>((resolve, reject) => {
  // const jokeUrl='https://jsonplaceholder.typicode.com/todos/1'

  // fetch(jokeUrl)
  //   .then(res => res.json())
  //   .then(resolve)
  //   .catch(reject)
  const result = {
    type: 'success',
    value: [
      {id:1,joke:"joke1", category: ['ct1', 'ct5']},
      {id:2,joke:"joke2", category: ['ct2', 'ct6']},
      {id:3,joke:"joke3", category: ['ct3', 'ct7']},
      {id:4,joke:"joke4", category: ['ct4', 'ct8']},
    ]
  };
  // if (typeof T) {
  //
  // }
  resolve(result as T);
});