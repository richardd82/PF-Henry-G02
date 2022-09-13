import React, { useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "./Nav.css";
// Assets
import logo_thumb from "../../assets/media/images.png";
import logo_Henry from "../../assets/media/logoHenryWhite.png";
import alumno from "../../assets/media/avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, usersValidate } from "../../redux/actions";
import jwt from 'jwt-decode';


export default function Nav({ user }) {
const navigate = useNavigate();
	const token = localStorage.getItem('token');
	console.log(token)
	const users = jwt(token);
	console.log(users.category)
	

	const GOOGLE_CLIENT_ID = "AIzaSyBnFVqnIJy_hAtph6l7W5_n9c0lLzCMkKM";
	let obj = [];
	obj.push(user);
	const dispatch = useDispatch();
	// console.log(obj[0].photos[0].value);
	// console.log(obj + "********************************************");
	const handleLogout = async() => {
		// window.open("https://localhost:3001/auth/logout", "_self");
		await dispatch(logout());
		// localStorage.clear();
		navigate('/login')
		// setTimeout(() => {
				
			// window.open('https://localhost:3000/login', "_self")		
		// }, 2000);
	};
	const redirect = () =>{
		navigate('/login' )
	}
console.log(users.name +  'Esto es users')
	return (
		<div className="nav">
			<header>
				{users ? (
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
							<Link to="/assistance">
								<p className="avatar__name">Assistance</p>
							</Link>
							<Link to="/contacto">
								<p className="avatar__name">Contacto</p>
							</Link>
							<p className="avatar__name">{users.name}</p>
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
					<div onLoad={redirect}></div>
				)}
			</header>			
		</div>
	);
}
