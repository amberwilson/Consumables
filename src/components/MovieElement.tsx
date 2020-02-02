import * as React from "react";

import Movie from "../classes/Movie";
import { MdMovie } from "react-icons/md";

type Props = {
  movie: Movie;
};
const MovieElement: React.FunctionComponent<Props> = ({ movie }) => {
  return (
    <div>
      <MdMovie />
      {movie.title || "Not specified"}
    </div>
  );
};

export default MovieElement;
