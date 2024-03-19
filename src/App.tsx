import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  const getMovies = async (searchValue) => {
    setLoading(true);
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=348a22ae`;
    const response = await fetch(url);
    const responseJson = await response.json();

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    setLoading(false);
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  const handleGenreClick = async (genre) => {
    setSearchValue(genre);
  };

  useEffect(() => {
    if (!searchValue) {
      getMovies("Star Wars");
    } else {
      getMovies(searchValue);
    }
  }, [searchValue]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="movie-app justify-content-center">
      <Header
        handleGenreClick={handleGenreClick}
        clearSearch={() => setSearchValue("")}
      />
      <SearchBar
        className="search-bar"
        searchValue={searchValue}
        setSearchValue={handleSearchChange}
      />
      {loading ? (
        <div className="loading">Yükleniyor...</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
