import React from "react";

const SearchBar = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <input
          className="form-control col-12 search-bar"
          value={props.searchValue}
          onChange={(event) => props.setSearchValue(event.target.value)}
          placeholder="Search Movie..."
        ></input>
      </div>
      {props.searchValue.length < 3 && props.searchValue.length > 0 && (
        <div className="row mt-2">
          <div className="col-12">
            <p className="text-danger">Please enter at least 3 characters.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
