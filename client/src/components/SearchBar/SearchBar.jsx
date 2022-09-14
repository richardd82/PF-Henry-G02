import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
//import { useNavigate } from 'react-router-dom';
// Actions
import { getVideosByName } from '../../redux/actions/index';
import './SearchBar.css';
import lupa from '../../media/lupa.png';

const SearchBar = () => {
  const dispatch = useDispatch();
  //const navigate = useNavigate();
  const [nameSearch, setNameSearch] = useState('');

  function handleChange(e) {
    setNameSearch(e.target.value);
  }
// console.log(nameSearch);
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getVideosByName(nameSearch));
    setNameSearch('');
    e.target.placeholder = 'Search...';
    //navigate('/catalog', { replace: true });
  }

  return (
    <div className="search">
      <form id="Form" onSubmit={e => handleSubmit(e)}>
        <div className="search">
          <input
            type="text"
            onChange={(e)=>handleChange(e)}
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
