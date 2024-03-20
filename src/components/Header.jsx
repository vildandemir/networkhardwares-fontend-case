import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/themovieapp.png";

const Header = ({ handleGenreClick, clearSearch }) => {
  // Function to handle clicking on the logo
  const handleLogoClick = () => {
    clearSearch();
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ position: "sticky", top: 0, zIndex: 100 }}
    >
      <div className="container">
        {/* Link to the homepage, triggers the clearSearch function when clicked */}
        <Link className="navbar-brand" to="/" onClick={handleLogoClick}>
          {/* Application logo */}
          <img
            src={logo}
            alt="Logo"
            width="50"
            height="44"
            className="d-inline-block align-text-top"
          />
        </Link>
        {/* Button to toggle navigation menu */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navigation menu */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {/* Navigation links for different genres */}
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("action")}
              >
                Action
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("comedy")}
              >
                Comedy
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("drama")}
              >
                Drama
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("horror")}
              >
                Horror
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                onClick={() => handleGenreClick("new")}
              >
                New
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Header;
