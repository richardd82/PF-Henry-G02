import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.css';

import logo_thumb from '../../media/images.png';
import logo_Henry from '../../media/logoHenryWhite.png';
import alumno from '../../media/avatar.png';
// import lupa from '../../media/lupa.png'
import rocket from '../../media/rocket.png';
import SearchBar from '../SearchBar/SearchBar';

export default function Nav() {
  return (
    <div className="nav">
      <header>
        <div>
          <img className="logo__thumb" src={logo_thumb} alt="" />
          <h2>Students</h2>
        </div>
        <img src={logo_Henry} alt="" />
        <div className="avatar">
          <p className="avatar__name">Alumno de Henry</p>
          <img className="avatar__image" src={alumno} alt="" />
        </div>
      </header>
      <nav className="nav__links">
        <ul>
          <li key={1}>
            <Link
              className="nav__links-active"
              to="/bootcamp/module/74622cfb-5b6e-42dd-b364-4e81bfe2f3ee"
            >
              M1
            </Link>
          </li>
          <li key={2}>
            <Link to="/bootcamp/module/74622cfb-5b6e-42dd-b364-4e81bfe2f3ee">
              M2
            </Link>
          </li>
          <li key={3}>
            <Link to="/bootcamp/module/74622cfb-5b6e-42dd-b364-4e81bfe2f3ee">
              M3
            </Link>
          </li>
          <li key={4}>
            <Link to="/bootcamp/module/74622cfb-5b6e-42dd-b364-4e81bfe2f3ee">
              M4
            </Link>
          </li>
          <li key={5}>
            <Link to="/bootcamp/module/74622cfb-5b6e-42dd-b364-4e81bfe2f3ee">
              PI
            </Link>
          </li>
          <li key={6}>
            <Link to="/bootcamp/module/74622cfb-5b6e-42dd-b364-4e81bfe2f3ee">
              JP
            </Link>
          </li>
          <img className="nav__rocket" src={rocket} alt="" />
        </ul>
        <div>
          <SearchBar />
        </div>
        {/* <div className="search">
            <input className="search-Input" type="text"  placeholder="Buscar..."/>
            <Link to="/" className="link-Search"><img className="icon-Search" src={lupa} alt=""/></Link>
          </div> */}
      </nav>
    </div>
  );
}
