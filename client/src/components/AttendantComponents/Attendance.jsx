import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import StudentList from "./StudentList.jsx";
// Actions
import {
  getUsers,
  getAllClasses,
  getModules,
  getCohorts,
  getStandups,
} from "../../redux/actions/attendanceActions.js";
// import Nav from "../Nav/Nav.jsx";
import "./Formularios.css";
import Nav from "../Nav/Nav.jsx";
const Attendance = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.attendance);
  //const ta = state.users.filter(e => e.name === user.displayName)[0];
  const students = state.users.filter(e=> e.category === 'student')
  let ta = ''
  if (!user.category) {
    ta = state.users.filter((e) => e.name === user._json.name );
 }else{
   ta = state.users.filter((e) => e.name === user.name );
   }
   const taSup = ta.map(e=>e.standupId).toString()
   const taCohort = ta.map(e=>e.cohortId)
   const usersMaped = students.map((e) => e.standupId)
   const filtered = students.filter((e) => e.standupId === taSup );
  useEffect(() => {
    dispatch(getAllClasses());
    dispatch(getUsers());
    dispatch(getCohorts());
    dispatch(getModules());
    dispatch(getStandups());
  }, [dispatch]);
  const [options, setOptions] = useState({
    module: "",
    lecture: "",
  });
  const handleChange = (e) => {
    setOptions((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  return (
    <>
    <Nav user={user}/>
    <div className="parent">
      <div className="container">
        <h1 className="title">CONTROL ASISTENCIAS STANDUP</h1>
        <form className="form">
          <select
            className="select"
            name="module"
            onChange={(e) => handleChange(e)}
          >
            <option value="none">Select a Module</option>
            {state.modules &&
              state.modules
                .sort((a, b) => {
                  const aDate = new Date(a.createdAt);
                  const bDate = new Date(b.createdAt);
                  return aDate - bDate;
                })
                .map((module) => {
                  return (
                    <option key={module.name} value={module.id}>
                      {module.name}
                    </option>
                  );
                })}
          </select>
          <select
            className="select"
            name="lecture"
            onChange={(e) => handleChange(e)}
          >
            <option value="none">Select a Lecture</option>
            {state.lectures &&
              state.lectures
                .sort((a, b) => {
                  const aDate = new Date(a.createdAt);
                  const bDate = new Date(b.createdAt);
                  return aDate - bDate;
                })
                .filter(
                  (lecture) => lecture.moduleId === options.module
                )
                .map((lecture) => {
                  return (
                    <option key={lecture.id} value={lecture.id}>
                      {lecture.name}
                    </option>
                  );
                })}
          </select>
        </form>
        {options.module && options.lecture && (
          <StudentList
            lecture={options.lecture}
            currentStudents={filtered}
            standup={taSup}
           // cohort={taCohort}
          />
        )}
      </div>
    </div>
    </>
  );
};
export default Attendance;