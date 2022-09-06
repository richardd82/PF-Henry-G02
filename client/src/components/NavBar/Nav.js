import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Nav.css';
// Assets
import logo_thumb from '../../assets/media/images.png';
import logo_Henry from '../../assets/media/logoHenryWhite.png';
import alumno from '../../assets/media/avatar.png';
import rocket from '../../assets/media/rocket.png';
// Actions
import {
  getAllModules,
  getAllLessons,
  clearState,
} from '../../redux/actions/bootcampActions.js';
import SearchBar from '../SearchBar/SearchBar';

export default function Nav({ user }) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllModules());
    dispatch(getAllLessons());
  }, [dispatch]);

  const handleClick = () => {
    dispatch(clearState());
    dispatch(getAllLessons());
    dispatch(getAllModules());
  };

  const lessons = useSelector(state => state.bootcamp.lessons);
  const modules = useSelector(state => state.bootcamp.modules);

  const GOOGLE_CLIENT_ID = 'AIzaSyBnFVqnIJy_hAtph6l7W5_n9c0lLzCMkKM';
  let obj = [];
  obj.push(user);
  // console.log(obj[0].photos[0].value);
  // console.log(obj + "********************************************");
  const logout = () => {
    window.open('https://localhost:3001/auth/logout', '_self');
  };

  return (
    <div className="nav">
      {/* <header>
        <div>
          <img className="logo__thumb" src={logo_thumb} alt="" />
          <h2>Students</h2>
        </div>
        <img src={logo_Henry} alt="" />
        <div className="avatar">
          <p className="avatar__name">Alumno de Henry</p>
          <img className="avatar__image" src={alumno} alt="" />
        </div>
      </header> */}
      <header>
        {user ? (
          <>
            <Link to="/bootcamp">
              <div>
                <img className="logo__thumb" src={logo_thumb} alt="" />
                <h2>Students</h2>
              </div>
            </Link>
            <img src={logo_Henry} alt="" />
            <div className="avatar">
              <Link to="/bootcamp/contacto">
                <p className="avatar__name">Contacto</p>
              </Link>
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
        <ul>
          {modules
            .sort((a, b) => {
              const aDate = new Date(a.createdAt);
              const bDate = new Date(b.createdAt);
              return aDate - bDate;
            })
            .map((obj, index) => {
              return (
                <li key={index}>
                  <Link
                    onClick={() => handleClick()}
                    key={index}
                    to={`/bootcamp/module/${obj.id}`}
                  >
                    <section className="sectiom__title-modulo">
                      <h1>{obj.name}</h1>
                    </section>
                  </Link>
                </li>
              );
            })}
          <img className="nav__rocket" src={rocket} alt="" />
        </ul>

        {/* </ul> */}
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
