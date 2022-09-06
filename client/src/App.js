import { Routes, Route, Navigate } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
// import Nav from './components/NavBar/Nav.js';
import Bootcamp from './pages/Bootcamp/Bootcamp.jsx';
import Catalog from './pages/Catalog/Catalog.jsx';
import Details from './pages/Details/Details.jsx';
import Module from './pages/Module/Module.jsx';
import NotFound from './pages/NotFound/NotFound.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Login from '../src/pages/Login/Login';
import './App.css';
import { useEffect, useState } from 'react';
import Contact from './components/Contact/Contact.jsx';

function App() {
  const [user, setUser] = useState({});
  console.log(user);
  // const history = useHistory();
  useEffect(() => {
    const getUser = () => {
      fetch('https://localhost:3001/auth/login/success', {
        method: 'GET',
        credentials: 'include',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Credentials': true,
        },
      })
        .then(response => {
          if (response.status === 200) return response.json();
          throw new Error('Authentication has been failed!');
        })
        .then(resObject => {
          // console.log(resObject.user)
          setUser(resObject.user);
        })
        .catch(err => {
          console.log(err);
        });
    };
    getUser();
  }, []);
  return (
    <div className="App">
      {/* <Nav user={user} /> */}
      <Routes>
        <Route path="/bootcamp/contacto" element={<Contact user={user} />} />
        <Route exact path="/bootcamp" element={<Bootcamp user={user} />} />
        <Route
          path="/bootcamp/catalog"
          element={<Catalog user={user && user} />}
        />
        <Route
          path="/"
          element={user.id ? <Navigate to="/bootcamp" /> : <Login />}
        />
        {/* <Route
          path="/bootcamp"
          element={!user.id ? <Navigate to="/" /> : <Navigate to='/bootcamp' />}
        /> */}
        <Route exact path="/" element={<Login />} />
        {/* <Route exact path="/bootcamp/catalog" element={<Catalog user={user}/>} /> */}
        <Route
          exact
          path="/bootcamp/lecture/:id"
          element={<Details user={user} />}
        />
        <Route exact path="/bootcamp/profile/:userId" element={<Profile />} />
        <Route
          exact
          path="/bootcamp/module/:moduleId"
          element={<Module user={user} />}
        />
        <Route path="*" element={<NotFound user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;
