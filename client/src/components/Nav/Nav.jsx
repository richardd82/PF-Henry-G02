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
	const GOOGLE_CLIENT_ID = "AIzaSyBQVj2X9xWCr-pgiJDzR0K5TXNVaaUoeec";
	const users = useSelector((state) => state.users.allUsers);
	const dispatch = useDispatch();
	useEffect(() => {
		if (!users.length) {
			dispatch(getTodosUsuarios());
		}
	}, [dispatch]);

	const handleLogout = () => {
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
						<img src={logo_Henry} alt="" />
						{/* </Link> */}
						{/* && active === true ? */}
						<div className="avatar">
							{category === "student" ? (
								<div>
									<Link to="/userProfile">
										<p className="avatar__name">Profile</p>
									</Link>
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
							) : category === "ta" ? (
								<div>
									<Link to="/userProfile">
										<p className="avatar__name">Profile</p>
									</Link>
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
								// photo+GOOGLE_CLIENT_ID
								src={photo || user.image}
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
