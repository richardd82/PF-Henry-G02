import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';

import Catalog from "./pages/Catalog/Catalog.jsx";
import Details from "./pages/Details/Details.jsx";
import Module from "./pages/Module/Module.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "../src/pages/Login/Login";
import "./App.css";
import { useEffect, useState } from "react";
import Admin from "./components/Admin/Admin.jsx";
import { FormsCreate } from "./components/Admin/Forms/FormsCreate/FormsCreate.jsx";
import FormUpdateUser from "./components/Admin/Forms/FormUpdateUser/FormUpdateUser.jsx";
import Students from "./components/Students/Students.jsx";
import Ta from "./components/Ta/Ta.jsx";
import Teachers from "./components/Teachers/Teachers.jsx";
import CreateVideo from "./components/Teacher/CreateVideo.js";
import UpdateClass from "./components/Teacher/UpdateClass.js";
import UpdateOptions from "./components/Admin/Forms/FormUpdateUser/UpdateOptions.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Attendant from "./pages/Attendant/Attendant";
import FormNewCohort from "./components/Admin/Forms/FormNewCohort/FormNewCohort.jsx";
import FormNewStandUp from "./components/Admin/Forms/FormNewSup/FormNewSup.jsx";
import FormNewUser from "./components/Admin/Forms/FormNewUser/FormNewUser.jsx";
import Attendance from "./components/AttendantComponents/Attendance.jsx";
import Payment from "./components/Payment/Payment.jsx";
import AllFavourite from "./pages/Favourite/allFavourite.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import jwt from "jwt-decode";


function App() {
	const [user, setUser] = useState({});
	const navigate = useNavigate();
	const token = localStorage.getItem("token");
	console.log(token + "Soy el token decodificado");

	console.log(user, "============> Esto es user");
	useEffect(() => {
		// if (!user.id) {
		const getUser = () => {
			if (token) {
				const tokenDecode = jwt(token);
				setUser(tokenDecode);
			} else {
				fetch("http://localhost:3001/auth/login/success", {
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
			}
		};
		getUser();
		// }
	}, [token, user]);
	//console.log(user);

	return (
		<div className="App">
			{/* {user.name || user.emails ? ( */}
				<Routes>
					{/* Rutas del Login y Home */}
					<Route
						path="/login"
						element={user.name || user.emails ? <Navigate to="/" /> : <Login />}
					/>
					<Route
						path="/"
						element={
							user.name || user.emails ? (
								<Profile user={user} />
							) : (
								<Navigate to="/login" />
							)
						}
					/>
					{/* Rutas del Admin */}
					<Route path="/admin" element={user.name || user.emails ? <Admin />:<Navigate to="/login" />} />
					<Route path="/createCOHORT" element={user.name || user.emails ? <FormNewCohort user={user} />:<Navigate to="/login" />} />
					<Route path="/createSUP" element={user.name || user.emails ? <FormNewStandUp user={user} />:<Navigate to="/login" />} />
					<Route path="/createUSER" element={user.name || user.emails ? <FormNewUser user={user} />:<Navigate to="/login" />} />
					<Route path="/update" element={user.name || user.emails ? <FormUpdateUser user={user} />:<Navigate to="/login" />} />
					<Route path="/update/:id" element={user.name || user.emails ? <UpdateOptions user={user} />:<Navigate to="/login" />} />
					{/* Rutas de Students y TA */}
					<Route path="/students" element={user.name || user.emails ? <Students />:<Navigate to="/login" />} />
					<Route path="/tas" element={user.name || user.emails ? <Ta />:<Navigate to="/login" />} />
					<Route path="/attendance" element={user.name || user.emails ? <Attendance user={user} />:<Navigate to="/login" />} />
					<Route path="/module/:id" element={user.name || user.emails ? <Module user={user} />:<Navigate to="/login" />} />
					<Route path="/lecture/:id" element={user.name || user.emails ? <Details user={user} />:<Navigate to="/login" />} />
					<Route path="/codeReview/:id" element={user.name || user.emails ? <Details user={user} />:<Navigate to="/login" />} />
					<Route path="/favourite" element={user.name || user.emails ? <AllFavourite user={user} />:<Navigate to="/login" />} />
					{/* Ruta de pasarela de pagos */}
					<Route path="/pagos" element={user.name || user.emails ? <Payment user={user} />:<Navigate to="/login" />} />
					<Route path="/catalog" element={user.name || user.emails ? <Catalog user={user} />:<Navigate to="/login" />} />
					<Route path="/contacto" element={user.name || user.emails ? <Contact user={user} />:<Navigate to="/login" />} />
					<Route path="/assistance" element={user.name || user.emails ? <Attendant user={user} />:<Navigate to="/login" />} />
					{/* Rutas de Teachers */}
					<Route path="/teachers" element={user.name || user.emails ? <Teachers />:<Navigate to="/login" />} />
					<Route path="/createVideo" element={user.name || user.emails ? <CreateVideo user={user} />:<Navigate to="/login" />} />
					<Route path="/updateclass" element={user.name || user.emails ? <UpdateClass user={user} />:<Navigate to="/login" />} />
					{/* Not found */}
					<Route path="*" element={user.name || user.emails ? <NotFound user={user} />:<Navigate to="/login" />} />
				</Routes>
			{/* ) : (
				 <Login />								
			)} */}
		</div>
	);
}

export default App;
