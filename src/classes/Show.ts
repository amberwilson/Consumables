import Consumable, { ConsumableType } from './Consumable';

enum ShowGenre {
  Action = 'ACTION',
  Adventure = 'ADVENTURE',
  Comedy = 'COMEDY',
  Horror = 'HORROR',
  ScienceFiction = 'SCIENCE_FICTION'
}

export default class Show extends Consumable {
  genres: ShowGenre[] = [];

  get type(): ConsumableType {
    return ConsumableType.Show;
  }
}

export { ShowGenre };
