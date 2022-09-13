import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "../src/pages/Login/Login";
import "./App.css";
import Catalog from "./pages/Catalog/Catalog";
// import catalog from "./redux/reducer/index";
// import Contact from "./components/Contact/Contact";
// import Attendant from "./pages/Attendant/Attendant";
// import Nav from "./components/Nav/Nav";
import Profile from "./pages/Profile/Profile";
import Details from "./pages/Details/Details";
import Admin from "./components/Admin/Admin";
import Students from "./components/Students/Students";
import Ta from "./components/Ta/Ta";
import Teachers from "./components/Teachers/Teachers";
import { FormsCreate } from "./components/Admin/Forms/FormsCreate/FormsCreate";
import CreateVideo from './components/Teacher/CreateVideo';
import UpdateClass from './components/Teacher/UpdateClass';
import Module from "./pages/Module/Module";

function App() {
	const [user, setUser] = useState({});

	useEffect(() => {
		const getUser = () => {
			fetch("https://localhost:3001/auth/login/success", {
				method: "GET",
				credentials: "include",
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"Access-Control-Allow-Credentials": true,
				},
			})
				.then((response) => {
					if (response.status === 200) return response.json();
					throw new Error("Authentication has been failed!");
				})
				.then((resObject) => {
					console.log(resObject);
					setUser(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);
	//console.log(user);
//{user.displayName ? <Navigate to="/" /> : <Login />}
//{user.displayName ? <Profile user={user} /> : <Navigate to='/login'/> } 
	return (
		<div className="App">			
			<Routes>
				{/* Rutas del Login y Home */}
				<Route path="/login" element={<Login />} />
				<Route exact path="/" element={<Profile />} />
				{/* Rutas del Admin */}
				<Route path="/admin" element={<Admin />} />
				<Route path="/create" element={<FormsCreate user={user} />}/>
				{/* Rutas de Students y TA */}
				<Route path="/students" element={<Students />} />
				<Route path="/tas" element={<Ta />} />
				<Route path="/module/:id" element={<Module user={user}/>} />
				<Route path="/lecture/:id" element={<Details user={user}/>} />
				<Route path="/catalog" element={<Catalog user={user}/>} />
				

				{/* Rutas de Teachers */}
				<Route path="/teachers" element={<Teachers />} />
				<Route path="/createVideo" element={<CreateVideo user={user} />}/>
				<Route path="/update" element={<UpdateClass user={user} />}/>
			</Routes>
		</div>
	);
}

export default App;
