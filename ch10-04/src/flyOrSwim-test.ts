import {flyOrSwim} from './flyOrSwim';
import {Fish, Bird} from './BirdAndFish';

[new Bird(), new Fish()]
  .forEach(flyOrSwim);