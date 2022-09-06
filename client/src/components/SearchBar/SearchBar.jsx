import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
// Actions
import { getClassesByName } from '../../redux/actions/searchBarActions';
import './SearchBar.css';
import lupa from '../../media/lupa.png';

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameSearch, setNameSearch] = useState('');

  function handleChange(e) {
    setNameSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getClassesByName(nameSearch));
    setNameSearch('');
    e.target.placeholder = 'Search...';
    navigate('/bootcamp/catalog', { replace: true });
  }

  return (
    <div className="search">
      <div>
        <Link to="/bootcamp/catalog">
          <p>Catalogo</p>
        </Link>
      </div>
      <form id="Form" onSubmit={e => handleSubmit(e)}>
        <div className="search">
          <input
            type="text"
            onChange={handleChange}
            value={nameSearch}
            className="search-Input"
            placeholder="Search..."
          />
          <button type="submit" className="icon-Search" src={lupa}>
            <i>&#128640;</i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
