import { Routes, Route, Navigate } from "react-router-dom";
// import { useHistory } from 'react-router-dom';
import Nav from "./components/NavBar/Nav.js";
import Bootcamp from "./pages/Bootcamp/Bootcamp.jsx";
import Catalog from "./pages/Catalog/Catalog.jsx";
import Details from "./pages/Details/Details.jsx";
import Module from "./pages/Module/Module.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Login from "../src/pages/Login/Login";
import UserAdmin from "./pages/AdminProfile/UserAdmin.jsx";
import "./App.css";
import { useEffect, useState } from "react";
import Contact from "./components/Contact/Contact.jsx";
import FormNewClass from "./components/Forms/FormNewClass/FormNewClass.jsx";
import { FormCreate } from "./components/Forms/FormsCreate/FormsCreate.jsx";
import FormUpdateUser from "./components/Forms/FormUpdateUser/FormUpdateUser";
import UpdateOptions from "./components/Forms/FormUpdateUser/UpdateOptions.jsx";

function App() {
  const [user, setUser] = useState({});
  // const history = useHistory();
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
          // console.log(resObject.user)
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
      {/* <Nav user={user} /> */}
      <Routes>
        <Route exact path="/adashboard/create" element={<FormCreate />} />
        <Route exact path="adashboard/updateuser" element={<FormUpdateUser />} />
        <Route exact path="adashboard/updateuser/:id" element={<UpdateOptions />} />
        <Route exact path="/crearclase" element={<FormNewClass />} />

        <Route
          exact
          path="/bootcamp/classes/create"
          element={<FormNewClass />}
        />
        <Route exact path={`/adashboard`} element={<UserAdmin />} />
        <Route exact path={`/adashboard`} element={<UserAdmin />} />

        <Route
          exact
          path="/bootcamp/catalog"
          element={<Catalog user={user && user} />}
        />
        <Route path="/bootcamp/contacto" element={<Contact user={user} />} />
        <Route exact path="/" element={<Login />} />
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
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
