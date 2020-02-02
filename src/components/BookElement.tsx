import * as React from "react";

import Book from "../classes/Book";
import { MdBook } from "react-icons/md";

type Props = {
  book: Book;
};
const BookElement: React.FunctionComponent<Props> = ({ book }) => {
  return (
    <div>
      <MdBook />
      {book.title || "Not specified"}
    </div>
  );
};

export default BookElement;
