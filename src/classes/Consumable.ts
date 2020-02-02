import cuid from "cuid";

import Rating from "./Rating";

enum ConsumableType {
  BoardGame = "BOARD_GAME",
  Book = "BOOK",
  Movie = "MOVIE",
  Show = "SHOW",
  VideoGame = "VIDEO_GAME"
}

abstract class Consumable {
  uid: string;
  title?: string;
  type?: ConsumableType;
  rating?: Rating;
  releaseDate?: Date;
  createdAt: Date = new Date();
  editedAt?: Date;

  constructor() {
    this.uid = cuid();
  }

  toJSON() {
    return { ...this, type: this.type };
  }
}

export default Consumable;
export { ConsumableType };
