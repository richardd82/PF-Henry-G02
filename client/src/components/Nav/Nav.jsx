import React from "react";
import { Link } from "react-router-dom";

import "./Nav.css";

import logo_thumb from "../../assets/media/images.png";
import logo_Henry from "../../assets/media/logoHenryWhite.png";
import alumno from "../../assets/media/avatar.png";
import lupa from "../../assets/media/lupa.png";
import rocket from "../../assets/media/rocket.png";
import { useSelector } from "react-redux";

export default function Nav({ user }) {
  const GOOGLE_CLIENT_ID = "AIzaSyBnFVqnIJy_hAtph6l7W5_n9c0lLzCMkKM";
  let obj = []
  obj.push(user);
  console.log( obj[0].photos[0].value)
	// console.log(obj + "********************************************");
	const logout = () => {
		window.open("http://localhost:3001/auth/logout", "_self");
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
							<img className="avatar__image" src="" alt="" onClick={logout} />
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
					<li>
						<Link className="nav__links-active" to="/">
							M1
						</Link>
					</li>
					<li>
						<Link to="/">M2</Link>
					</li>
					<li>
						<Link to="/">M3</Link>
					</li>
					<li>
						<Link to="/">M4</Link>
					</li>
					<li>
						<Link to="/">PI</Link>
					</li>
					<li>
						<Link to="/">JP</Link>
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
