import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import StudentList from './StudentList.jsx';
// Actions
import {
  getUsers,
  getAllClasses,
  getModules,
  getCohorts,
  getStandups,
} from '../../redux/actions/attendanceActions.js';
// import Nav from "../Nav/Nav.jsx";
import './Formularios.css';

const Attendance = ({ user }) => {
  const dispatch = useDispatch();
  const state = useSelector(state => state.attendance);
  //const ta = state.users.filter(e => e.name === user.displayName)[0];

  const ta = {
    name: 'Romi',
    lastname: 'Jimenez',
    email: 'romi@gmail.com',
    imege: 'image',
    password: 1234,
    category: 'ta',
    active: true,
    moduleId: '1d7be497-d63a-4422-9f86-89eaf640cd53',
    cohortId: 'e03aecf1-2f6a-4c58-93f7-f7e21519ed20',
    standupId: '6c5dc9cc-460c-408c-8cb8-cfa94af873ec'
  }
    const students = state.users.filter(
    e => e.category === 'student' && e.standupId === ta.standupId
  );  


  useEffect(() => {
    dispatch(getAllClasses());
    dispatch(getUsers());
    dispatch(getCohorts());
    dispatch(getModules());
    dispatch(getStandups());
  }, [dispatch]);

  const [options, setOptions] = useState({
    module: '',
    lecture: '',
  });

  const handleChange = e => {
    setOptions(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  return (
    <div className="parent">
      <div className="container">
        <h1 className="title">CONTROL ASISTENCIAS STANDUP</h1>
        <form className="form">
          <select
            className="select"
            name="module"
            onChange={e => handleChange(e)}
          >
            <option value="none">Select a Module</option>
            {state.modules &&
              state.modules
                .sort((a, b) => {
                  const aDate = new Date(a.createdAt);
                  const bDate = new Date(b.createdAt);
                  return aDate - bDate;
                })
                .map(module => {
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
            onChange={e => handleChange(e)}
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
                  lecture => lecture.moduleId.toString() === options.module
                )
                .map(lecture => {
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
            currentStudents={students}
            standup={ta.standupId}
            cohort={ta.cohortId}
          />
        )}
      </div>
    </div>
  );
};

export default Attendance;
