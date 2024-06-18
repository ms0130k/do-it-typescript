import {Bird, Fish} from './BirdAndFish'

// export const flyOrSwim = (o: Bird | Fish): void => {
//   if (o instanceof Bird) {
//     (o as Bird).fly()
//   }
//   if (o instanceof Fish) {
//     (<Fish>o).swim()
//   }
// }

export const flyOrSwim = (o: Bird | Fish): void => {
  if (o instanceof Bird) {
    o.fly()
  }
  if (o instanceof Fish) {
    o.swim()
  }
}