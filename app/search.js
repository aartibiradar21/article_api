import React from 'react';

const SearchBar = () => {
  return (
    <div className="form">
      <form className="form-inline my-2 my-lg-0">
        <input
          type="search"
          placeholder="Search"
          aria-label="Go"
        />
        <button className="go" type="submit">
          Go
        </button>
      </form>
    </div> 
  );
};

export default SearchBar;

