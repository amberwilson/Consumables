import Consumable, { ConsumableType } from "./Consumable";

enum MovieGenre {
  Action = "ACTION",
  Adventure = "ADVENTURE",
  Comedy = "COMEDY",
  Horror = "HORROR",
  ScienceFiction = "SCIENCE_FICTION"
}

export default class Movie extends Consumable {
  genres: MovieGenre[] = [];

  get type(): ConsumableType {
    return ConsumableType.Movie;
  }
}

export { MovieGenre };
