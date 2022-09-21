import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Actions
import { getVideosByName } from "../../redux/actions/index";
import "./SearchBar.css";
import lupa from "../../media/lupa.png";

const SearchBar = () => {
  const videos = useSelector((state) => state.videos.allVideos);

  const videosMapped = videos.map((e) => e.name).toString();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [nameSearch, setNameSearch] = useState("");

  function handleChange(e) {
    setNameSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getVideosByName(nameSearch));
    setNameSearch("");
    e.target.placeholder = "Search...";
    navigate("/catalog", { replace: true });
  }

  return (
    <div className="search">
      <form id="Form" onSubmit={e => handleSubmit(e)}>
        <div className="s__input">
          <input
            type="text"
            onChange={handleChange}
            value={nameSearch}
            className="search-Input"
          />
          <label className='lbl-search'>Search...</label>
          <button type="submit" className="icon-Search" src={lupa}>
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
