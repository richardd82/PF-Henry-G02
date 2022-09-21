import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import swal from "sweetalert";
import slides_pdf from "../Students/DashboardStudents/Slides_Henry.pdf";

// Assets
import home from '../../assets/media/home.png';
import about from '../../assets/media/about.png'
import correo from '../../assets/media/correo.png';
import discord from '../../assets/media/discord.png';
import slack from '../../assets/media/slack.png';
import slides from '../../assets/media/slides.png';
import logo_thumb from '../../assets/media/images.png';
import alumno from '../../assets/media/avatar.png';
import { useDispatch, useSelector } from 'react-redux';
import { getTodosUsuarios } from '../../redux/actions';


export default function Nav({ user }) {
	const GOOGLE_CLIENT_ID = "AIzaSyBQVj2X9xWCr-pgiJDzR0K5TXNVaaUoeec";
	const users = useSelector((state) => state.users.allUsers);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!users.length) {
			dispatch(getTodosUsuarios());
		}
	}, [dispatch]);

  function sweetSlides() {
    swal("SLIDES", {
      buttons: { descarga: "DESCARGAR", navegador: "VISTA PREVIA" },
    }).then((value) => {
      switch (value) {
        case "descarga":
          {
            var a = document.createElement("a");
            a.href = slides_pdf;
            a.download = "slides-Henry.pdf";
            a.click();
            window.URL.revokeObjectURL(slides_pdf);
          }
          break;
        case "navegador":
          swal("Serás redireccionado a las slides", { buttons: false });
          setTimeout(() => {
            var a = document.createElement("a");
            a.href = slides_pdf;
            a.click();
            window.URL.revokeObjectURL(slides_pdf);
          }, 1500);
        default:
          console.log("hola");
      }
    });
  }

  function sweetAttendance() {
    swal({
      title: "ASISTENCIAS",
      text: "Tu asistencia se calcula en función de todas las veces que hubo SUP y que tendrías que haber participado en el mismo. Esto incluye cohortes de las que hubieras migrado.(Estamos en plena transición a esta herramienta, por lo que los valores pueden ser inferiores a los reales, no te preocupes)",
    });
  }

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
	const logout = () => {
		window.open("http://localhost:3001/auth/logout", "_self");
	};

	let category = "";
	let active = false;
	let userValidate = [];
	let photo = "";

	if (!user.category) {
		userValidate = users.find((e) => e.email === user.emails[0].value);
		active = userValidate && userValidate.active;
		//console.log(active);
		category = userValidate && userValidate.category;
		photo = user.photos[0].value;
	} else {
		category = user.category;
		console.log(category);
		active = user.active;
		photo = user.image;
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
            {/* <img src={logo_Henry} alt="" /> */}
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
                  <Link to="">
                    <button onClick={sweetAttendance}>
                    <p className="avatar__name">Asistencias</p></button>
                  </Link>
                </div>
              ) : category === 'ta'? (
                <div>
                  <Link to="/catalog">
                    <p className="avatar__name">Catalogo</p>
                  </Link>
                  <Link to="/assistance">
                    <p className="avatar__name">Assistance</p>
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
                src={alumno}
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
      <div className="sticky-container">
    <ul className="sticky">
        <li>
            <img src={home} width="32" height="32" alt="home"/>
            <p><a href="" >Home</a></p>
        </li>
        <li>
            <img src={slack} width="32" height="32" alt="slack"/>
            <p><a href="https://soyhenry.slack.com" target="_blank">Slack</a></p>
        </li>
        <li>
        <button onClick={sweetSlides}>
          <img src={slides} width="32" height="32"  alt="slides"/>
            <p><Link to="">Slides</Link></p></button>
        </li>
        <li>
            <img src={about} width="32" height="32" alt="abouts"/>
            <p><Link to="">Abouts</Link></p>
        </li>
        <li>
            <img src={correo} width="32" height="32" alt="contacto"/>
            <p><Link to="/contacto">Contact</Link></p>
        </li>
        <li>
            <img src={discord} width="32" height="32" alt="discord"/>
            <p><a href="https://discord.com" target="_blank">Discord</a></p>
        </li>
    </ul>
</div>
    </div>
  );
}
