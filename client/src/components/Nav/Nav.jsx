import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// Assets
import logo_thumb from "../../assets/media/images.png";
import logo_Henry from "../../assets/media/logoHenryWhite.png";
import alumno from "../../assets/media/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { getTodosUsuarios } from "../../redux/actions";


export default function Nav({ user }) {

	const GOOGLE_CLIENT_ID = "AIzaSyBnFVqnIJy_hAtph6l7W5_n9c0lLzCMkKM";
	let obj = [];
	obj.push(user);
	// console.log(obj[0].photos[0].value);
	// console.log(obj + "********************************************");
	const logout = () => {
		window.open("https://localhost:3001/auth/logout", "_self");
	};



	const users = useSelector((state) => state.users.allUsers);
	const dispatch = useDispatch();

	useEffect(() => {
		if (!users.length) {
			dispatch(getTodosUsuarios());
		}
	}, [dispatch]);
	///FALTA INVESTIGAR COMO OBTENER EL EMAIL DEL USER DE GOOGLE
	// dispatch(getTodosUsuarios());
	const userValidate = users.find((e) => e.name === user.displayName);
	const category = userValidate && userValidate.category;
	const active = userValidate && userValidate.active;

	return (
		<div className="nav">
			<header>
				{user ? (
					<>
						<div>
							<Link to="/">
								<img className="logo__thumb" src={logo_thumb} alt="" />
							</Link>
							<h2>Students</h2>
						</div>
						{/* <Link to="/"> */}
							<img src={logo_Henry} alt="" />
						{/* </Link> */}
						<div className="avatar">
						{category === "student" && active === true ? (
						<div>
							<Link to="/favourite">
								<p className="avatar__name">Favourite</p>
							</Link>
							<Link to="/contacto">
								<p className="avatar__name">Contacto</p>
							</Link>
							</div>) : category === "ta" && active === true ? (<div>
								<Link to="/assistance">
								<p className="avatar__name">Assistance</p>
							</Link>
							<Link to="/favourite">
								<p className="avatar__name">Favourite</p>
							</Link>
							<Link to="/contacto">
								<p className="avatar__name">Contacto</p>
							</Link>
							</div>): null}

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
		</div>
	);
}
