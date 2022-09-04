import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import Nav from './components/Nav/Nav.jsx';
import Bootcamp from './pages/Bootcamp/Bootcamp.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Details from './pages/Details/Details.jsx';
import Landing from './pages/Landing/Landing.jsx';
import Module from './pages/Module/Module.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Login from '../src/pages/Login/Login'
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [user, setUser] = useState({});
//   const history = useHistory();
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
					console.log(resObject.user)
					setUser(resObject.user);
				})
				.catch((err) => {
					console.log(err);
				});
		};
		getUser();
	}, []);
  return (
    <div className="App">
	  {/* <Nav user={user}/> */}
		<Routes>
      <Route path="/Nav" element={<Nav user={user} />}/>
      <Route path="/bootcamp" element={<Bootcamp/>} />
      {/* <Switch> */}
	  <Route
			path="/login"
			element={user ? <Navigate to="/nav" /> : <Login />}
		/>
      	<Route path="/" element={<Login/>} />      
        <Route exact path="/bootcamp/catalog" element={<Catalog/>} />
        <Route exact path="/bootcamp/lecture/:id" element={<Details/>} />
        <Route exact path="/bootcamp/profile/:userId" element={<Profile/>} />
        <Route exact path="/bootcamp/module/:moduleId" element={<Module/>} />
        <Route exact path="/bootcamp/catalog" element={<Catalog/>} />
        <Route path="*" element={<NotFound />} />
		</Routes>
      {/* </Switch> */}
    </div>
  );
}

export default App;
