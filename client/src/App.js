import { Routes, Route, Navigate } from "react-router-dom";
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
import AllFavourite from "./pages/Favourite/allFavourite";

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

  return (
    <div className="App">
      <Routes>
        {/* Rutas del Login y Home */}
        <Route
          path="/login"
          element={user.displayName ? <Navigate to="/" /> : <Login />}
        />
        <Route
          exact
          path="/"
          element={
            user.displayName ? (
              <Profile user={user} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        {/* Rutas del Admin */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/createCOHORT" element={<FormNewCohort user={user} />} />
        <Route path="/createSUP" element={<FormNewStandUp user={user} />} />
        <Route path="/createUSER" element={<FormNewUser user={user} />} />
        <Route path="/update" element={<FormUpdateUser user={user} />} />
        <Route path="/update/:id" element={<UpdateOptions user={user} />} />
        {/* Rutas de Students y TA */}
        <Route path="/students" element={<Students />} />
        <Route path="/tas" element={<Ta />} />
        <Route path="/attendance" element={<Attendance user={user}/>} />
        <Route path="/module/:id" element={<Module user={user} />} />
        <Route path="/lecture/:id" element={<Details user={user} />} />
        <Route path="/codeReview/:id" element={<Details user={user} />} />
        <Route path="/favourite" element={<AllFavourite user={user}/>} />
        {/* Ruta de pasarela de pagos */}
        <Route path="/pagos" element={<Payment user={user}/>} />  
        <Route path="/catalog" element={<Catalog user={user} />} />
        <Route path="/contacto" element={<Contact user={user} />} />
        <Route path="/assistance" element={<Attendant user={user} />} />
        {/* Rutas de Teachers */}
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/createVideo" element={<CreateVideo user={user} />} />
        <Route path="/updateclass" element={<UpdateClass user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
