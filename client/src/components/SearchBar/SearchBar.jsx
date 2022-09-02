import React from 'react';
import { useState } from 'react';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  function onSubmit(event) {
    event.preventDefault();
    window.location.href = '/bootcamp/catalog/' + search;
    document.getElementById('Form').reset();
  }

  function onInputText(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <nav id="myInput">
      <div className="wrap">
        <form id="Form" onSubmit={onSubmit}>
          <div className="search">
            <input
              type="text"
              onChange={onInputText}
              className="searchTerm"
              placeholder="What are you looking for?"
            />
            <button type="submit" className="searchButton">
              <i>&#128640;</i>
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default SearchBar;
