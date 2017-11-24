import { Person } from './person';
import { Place } from './place';

export class Letter {
  id: string;
  title: string;
  place: Place;
  sender: Person;
  receiver: Person;
  date: string;
}
