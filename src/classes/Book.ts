import Consumable from "./Consumable";

enum BookGenre {
  ActionAndAdventure = "ACTION_AND_ADVENTURE",
  Classics = "CLASSICS",
  ComicBook = "COMIC_BOOK",
  GraphicNovel = "GRAPHIC_NOVEL",
  DetectiveAndMystery = "DETECTIVE_AND_MYSTERY",
  Fantasy = "FANTASY",
  HistoricalFiction = "HISTORICAL_FICTION",
  Horror = "HORROR",
  LiterayFiction = "LITERARY_FICTION",
  Romance = "ROMANCE",
  ScienceFiction = "SCIENCE_FICTION",
  SuspenseAndThrillers = "SUSPENSE_AND_THRILLERS"
}

class Book extends Consumable {
  author?: string;
}

export default Book;
export { BookGenre };
