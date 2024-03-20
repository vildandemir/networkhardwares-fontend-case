import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.scss";
import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";

const App = () => {
  // State variables
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);

  // Function to fetch movies from the API
  const getMovies = async (searchValue) => {
    // Set loading state to true while fetching data
    setLoading(true);
    // API URL to fetch movies based on search value
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=348a22ae`;
    // Fetch data from the API
    const response = await fetch(url);
    // Convert response to JSON format
    const responseJson = await response.json();

    // If movies are found in the response, update the state with the movies
    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
    // Set loading state to false after fetching data
    setLoading(false);
  };

  // Fetch movies when searchValue changes
  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  // Function to handle genre click
  const handleGenreClick = async (genre) => {
    // Set the search value to the selected genre
    setSearchValue(genre);
  };

  // Fetch default movies when the component mounts or when searchValue is empty
  useEffect(() => {
    if (!searchValue) {
      getMovies("Star Wars");
    } else {
      getMovies(searchValue);
    }
  }, [searchValue]);

  // Function to handle search input change
  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <div className="movie-app justify-content-center">
      {/* Header component */}
      <Header
        handleGenreClick={handleGenreClick}
        clearSearch={() => setSearchValue("")}
      />
      {/* SearchBar component */}
      <SearchBar
        className="search-bar"
        searchValue={searchValue}
        setSearchValue={handleSearchChange}
      />
      {/* Display loading message or MovieList component */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <MovieList movies={movies} />
      )}
    </div>
  );
};

export default App;
