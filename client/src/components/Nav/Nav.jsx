import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import logo_thumb from "../../assets/media/images.png";
import logo_Henry from "../../assets/media/logoHenryWhite.png";
import alumno from "../../assets/media/avatar.png";
import lupa from "../../assets/media/lupa.png";
import rocket from "../../assets/media/rocket.png";
import { useSelector } from "react-redux";

export default function  Nav ({ user }) {
	const GOOGLE_CLIENT_ID = "AIzaSyBnFVqnIJy_hAtph6l7W5_n9c0lLzCMkKM";	
	// console.log(user)
	const userAuth = Object.values(user)
	// let userImg = userAut
	let imagenG = [];	
	const userImg = userAuth.forEach(element => {
		imagenG.push(element);
	})
	console.log(userImg)
	// let imagenF = []
	// const userImg = userAuth.forEach(element => imagen.push(element.picture));
	// let imgGit = []
	// let userImg = userAuth.forEach(element => {
	// 	imgGit.push(element);
		// console.log(element)
	
	//});
	// console.log(user.photos[0]?.value)
	
	const logout = () => {
		window.open("https://localhost:3001/auth/logout", "_self");
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
							<p className="avatar__name"></p>
							{/* {user.displayName} */}
							<img
								className="avatar__image"
								src={userImg}
								// {imagenG[6]}
								alt=""
								onClick={logout}
							/>
							{/* {
								user.photos[0].value + `?fields=image&key=${GOOGLE_CLIENT_ID}`
							} */}
							{/* {
									user._json.picture + `?fields=image&key=${GOOGLE_CLIENT_ID}`
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
					<li>
						<Link className="nav__links-active" to="/module/1">
							M1
						</Link>
					</li>
					<li>
						<Link to="/module/2">M2</Link>
					</li>
					<li>
						<Link to="/module/3">M3</Link>
					</li>
					<li>
						<Link to="/module/4">M4</Link>
					</li>
					<li>
						<Link to="/module/5">PI</Link>
					</li>
					<li>
						<Link to="/module/6">JP</Link>
					</li>
					<img className="nav__rocket" src={rocket} alt="" />
				</ul>

				<div className="search">
					<input className="search-Input" type="text" placeholder="Buscar..." />
					<Link to="/" className="link-Search">
						<img className="icon-Search" src={lupa} alt="" />
					</Link>
				</div>
			</nav>
		</div>
	);
}
