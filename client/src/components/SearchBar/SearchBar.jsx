import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
// Actions
import { getClassesByName } from '../../redux/actions/searchBarActions';

const SearchBar = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [nameSearch, setNameSearch] = useState('');

  function handleChange(e) {
    setNameSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getClassesByName(nameSearch));
    setNameSearch('');
    e.target.placeholder = 'What are you looking for?';
    history.push('/bootcamp/catalog');
  }

  return (
    <nav id="myInput">
      <div className="wrap">
        <form id="Form" onSubmit={e => handleSubmit(e)}>
          <div className="search">
            <input
              type="text"
              onChange={handleChange}
              value={nameSearch}
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
