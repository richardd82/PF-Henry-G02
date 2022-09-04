import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Nav.css';
// Assets
import logo_thumb from '../../assets/media/images.png';
import logo_Henry from '../../assets/media/logoHenryWhite.png';
import alumno from '../../assets/media/avatar.png';
import rocket from '../../assets/media/rocket.png';
import SearchBar from '../SearchBar/SearchBar';
// Actions
import {
  getAllModules,
  getAllLessons,
} from '../../redux/actions/bootcampActions.js';
import { useEffect } from 'react';
import ButtonModule from '../BootcampComponents/buttonModule';

export default function Nav({ user }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
  }, [dispatch]);

  const lessons = useSelector(state => state.bootcamp.lessons);
  const modules = useSelector(state => state.bootcamp.modules);
  const GOOGLE_CLIENT_ID = 'AIzaSyBnFVqnIJy_hAtph6l7W5_n9c0lLzCMkKM';
  let obj = [];
  obj.push(user);
  // console.log(obj[0].photos[0].value);
  // console.log(obj + "********************************************");
  const logout = () => {
    window.open('http://localhost:3001/auth/logout', '_self');
  };

  return (
    <div className="nav">
      <header>
        {user ? (
          <>
            <div>
              <img className="logo__thumb" src={logo_thumb} alt="" />
              <h2>Students</h2>
            </div>

            <img src={logo_Henry} alt="" />
            <div className="avatar">
              <p className="avatar__name">{user.displayName}</p>
              {/* {user.displayName} */}
              <img
                className="avatar__image"
                src={alumno}
                alt=""
                onClick={logout}
              />
              {/* {
								user.photos[0].value + `?fields=image&key=${GOOGLE_CLIENT_ID}`
							} */}
            </div>
          </>
        ) : (
          <Link className="link" to="/login">
            Login
          </Link>
        )}
      </header>
      <nav className="nav__links">
        <ButtonModule modules={modules} title="Bootcamp" data={lessons} />
        {/* {modules &&
            modules.map(module => {
              return (
                <li key={module.name}>
                  <Link
                    className="nav__links-active"
                    to={`/bootcamp/module/${module.id}`}
                  >
                    {module.name}
                  </Link>
                </li>
              );
            })} */}

        <img className="nav__rocket" src={rocket} alt="" />
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
