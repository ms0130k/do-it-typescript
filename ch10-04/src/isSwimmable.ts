import {Fish, Bird} from './BirdAndFish';

export const isSwimmable = (o: Bird | Fish): o is Fish => o instanceof Fish;