import * as React from 'react';

import Consumable, { ConsumableType } from '../classes/Consumable';
import MovieElement from './MovieElement';
import BookElement from './BookElement';
import Book from '../classes/Book';
import Movie from '../classes/Movie';

type Props = {
  consumable: Consumable;
};
const ConsumableElement: React.FunctionComponent<Props> = ({ consumable }) => {
  switch (consumable.type) {
    case ConsumableType.Book:
      return <BookElement book={consumable as Book} />;
    case ConsumableType.Movie:
      return <MovieElement movie={consumable as Movie} />;
  }

  console.error(
    `Unsupported ConsumableType ${JSON.stringify(consumable)} - skipping output`
  );
  return null;
};

export default ConsumableElement;
