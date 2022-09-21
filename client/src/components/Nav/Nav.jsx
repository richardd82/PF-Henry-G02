import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
// Assets
import logo_thumb from '../../assets/media/images.png';
import logo_Henry from '../../assets/media/logoHenryWhite.png';
import alumno from '../../assets/media/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosUsuarios } from '../../redux/actions';

export default function Nav({ user }) {
  const GOOGLE_CLIENT_ID = 'AIzaSyBQVj2X9xWCr-pgiJDzR0K5TXNVaaUoeec';
  const users = useSelector(state => state.users.allUsers);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!users.length) {
      dispatch(getTodosUsuarios());
    }
  }, [dispatch]);

	const handleLogout =  () => {
		if (user.category) {
			localStorage.clear();
			 dispatch(logout());
			window.location.reload("http://localhost:3000/login");
		} else if (user.emails) {
			window.open("http://localhost:3001/auth/logout", "_self");
		}
	};
	const redirect = () => {
		window.location.reload("http://localhost:3000/login");
	};
  // let obj = [];
  // obj.push(user);
  // // console.log(obj[0].photos[0].value);
  // // console.log(obj + "********************************************");
  const logout = () => {
    window.open('http://localhost:3001/auth/logout', '_self');
  };
  let category = '';
  let active = false;
  

// console.log(user._json.picture)
 //const photo = user.photos[0].value;
  ///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE
  // dispatch(getTodosUsuarios());
/*   const userValidate = users.find(e => e.name === user.displayName);
  const category = userValidate && userValidate.category; */
  // const active = userValidate && userValidate.active;

  if (!user.category) {
    // dispatch(getTodosUsuarios());
		
		const userValidate = users.find((e) => e.email === user.emails[0].value );
    active = userValidate && userValidate.active;
    //console.log(active);
    category = userValidate && userValidate.category;
  }else{
    category = user.category;

      active = user.active;
			// console.log(category);
	}


  return (
    <div className="nav">
      <header>
        {user ? (
          <>
            <div>
              <Link to="/">
                <img className="logo__thumb" src={logo_thumb} alt="" />
              </Link>
              <Link to="/">
                <h2>Students</h2>
              </Link>
            </div>
            {/* <Link to="/"> */}
            <img src={logo_Henry} alt="" />
            {/* </Link> */}
            {/* && active === true ? */}
            <div className="avatar">
              {category === 'student' ? (
                <div>
                  <Link to="/catalog">
                    <p className="avatar__name">Catalogo</p>
                  </Link>
                  <Link to="/favourite">
                    <p className="avatar__name">Favoritos</p>
                  </Link>
                  <Link to="/contacto">
                    <p className="avatar__name">Contacto</p>
                  </Link>
                </div>
              ) : category === 'ta'? (
                <div>
                  <Link to="/catalog">
                    <p className="avatar__name">Catalogo</p>
                  </Link>
                  <Link to="/attendance">
                    <p className="avatar__name">Asistencia</p>
                  </Link>
                  <Link to="/favourite">
                    <p className="avatar__name">Favourite</p>
                  </Link>
                  <Link to="/contacto">
                    <p className="avatar__name">Contacto</p>
                  </Link>
                </div>
              ) : null}
              <p className="avatar__name">{user.displayName || user.name}</p>
              {/* {user.displayName} */}
              <img
                className="avatar__image"
                src= {alumno}/* {photo+GOOGLE_CLIENT_ID} */
                alt=""
                onClick={handleLogout}
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
    </div>
  );
}
