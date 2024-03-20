import React, { useState } from "react";

const MovieList = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  console.log("Filmler:", props.movies);

  return (
    <div className="movie-list container-fluid">
      <div className="row justify-content-center">
        {props.movies.map((movie, index) => (
          <div
            className="col-xs-6 mt-3 movie-list__item col-md-4 col-lg-3"
            key={movie.imdbID}
            onClick={() => handleMovieClick(movie)}
          >
            <img src={movie.Poster} alt="movie"></img>
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal-container d-flex justify-content-center align-items-center">
          <div
            className="modal"
            style={{ display: "block" }}
            onClick={handleCloseModal}
          >
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="modal-body__img">
                    <img src={selectedMovie.Poster} alt="movie"></img>
                  </div>
                  <div className="modal-body__info">
                    <h5>{selectedMovie.Title}</h5>
                    <p>{selectedMovie.Year}</p>
                    <p>{selectedMovie.Genre}</p>
                    <p>{selectedMovie.Runtime}</p>
                    <p>{selectedMovie.Plot}</p>
                    <p>{selectedMovie.Director}</p>
                    <p>{selectedMovie.Actors}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop show" onClick={handleCloseModal}></div>
        </div>
      )}
    </div>
  );
};

export default MovieList;
