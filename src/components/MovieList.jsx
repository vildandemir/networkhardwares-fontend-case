import React from "react";

const MovieList = (props) => {
  return (
    <div className="movie-list container-fluid">
      <div className="row justify-content-center">
        {props.movies.map((movie, index) => (
          <div
            className="col-xs-6 mt-3 movie-list__item col-md-4 col-lg-3"
            key={movie.imdbID}
          >
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
