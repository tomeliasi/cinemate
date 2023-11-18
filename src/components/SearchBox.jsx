import React, { useState } from "react";

const SearchBox = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = () => {
    props.setSearchValue(searchInput);
  };

  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div className="col col-sm-4">
      <input
        className="search-input"
        value={searchInput}
        onChange={handleChange}
        placeholder="Search a movie..."
      ></input>
      <button className="search-button" onClick={handleSearch}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
