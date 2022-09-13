import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// Actions
import "./SearchBar.css";
import lupa from "../../../../media/lupa.png";
import { getTodosUsuarios, searchByEmail } from "../../../../redux/actions";

const SearchBarEmail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [emailSearch, setEmailSearch] = useState("");

  function handleChange(e) {
    setEmailSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (emailSearch === "") {
      dispatch(getTodosUsuarios());
    } else {
      dispatch(searchByEmail(emailSearch.toLowerCase()));
      setEmailSearch("");
      e.target.placeholder = "Search...";
    }
  }

  return (
    <div className="search">
      <form id="Form" onSubmit={(e) => handleSubmit(e)}>
        <div className="search">
          <input
            type="text"
            onChange={handleChange}
            value={emailSearch.toLowerCase()}
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

export default SearchBarEmail;
