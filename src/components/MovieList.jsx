import React, { useState } from "react";

const MovieList = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

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
            <p>{movie.Year}</p>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="modal-container">
          <div
            className="modal"
            style={{ display: "block" }}
            onClick={handleCloseModal}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedMovie.Title}</h5>
                  <button
                    type="button"
                    className="btn-close"
                    aria-label="Close"
                    onClick={handleCloseModal}
                  ></button>
                </div>
                <div className="modal-body">
                  <img src={selectedMovie.Poster} alt="movie"></img>
                  <p>{selectedMovie.Year}</p>
                  <p>{selectedMovie.Plot}</p>
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
