import Consumable, { ConsumableType } from './Consumable';

enum MovieGenre {
  Action = 'ACTION',
  Adventure = 'ADVENTURE',
  Comedy = 'COMEDY',
  Horror = 'HORROR',
  ScienceFiction = 'SCIENCE_FICTION'
}

export default class Movie extends Consumable {
  genres: MovieGenre[] = [];
  readonly type = ConsumableType.Movie;
}

export { MovieGenre };
