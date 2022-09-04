import React from 'react'
import {Link} from 'react-router-dom';

import './Nav.css'

import logo_thumb from '../../media/images.png'
import logo_Henry from '../../media/logoHenryWhite.png'
import alumno from '../../media/avatar.png'
import lupa from '../../media/lupa.png'
import rocket from '../../media/rocket.png'

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
            <img className="avatar__image" src={alumno} alt=""/>
        </div>
      </header>
      <nav className="nav__links">
          <ul>
            <li><Link className="nav__links-active" to="/bootcamp/module/1">M1</Link></li>
            <li><Link to="/bootcamp/module/2">M2</Link></li>
            <li><Link to="/bootcamp/module/3">M3</Link></li>
            <li><Link to="/bootcamp/module/4">M4</Link></li>
            <li><Link to="/bootcamp/module/5">PI</Link></li>
            <li><Link to="/bootcamp/module/6">JP</Link></li>
            <img className="nav__rocket" src={rocket} alt="" />
          </ul>
          
          <div className="search">
            <input className="search-Input" type="text"  placeholder="Buscar..."/>
            <Link to="/" className="link-Search"><img className="icon-Search" src={lupa} alt=""/></Link>
          </div>
      </nav>
    </div>
  )
}
