import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodosUsuarios } from "../../../../redux/actions";
import { FcCheckmark} from 'react-icons/fc';
// import style from './UserStats.module.css'
import './UserStats.css';


const UsersStats = () => {
  const allUsers = useSelector((state) => state.users.allUsers);
  let usersActive = 0;
  let usersInactive = 0;
  let teachersActive = 0;
  let teachersInactive= 0;
  let adminActive = 0;
  let adminInactive = 0;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodosUsuarios());
  }, [dispatch]);

const students = allUsers.filter(el => el.category === 'student' || el.category === 'ta');
const teachers = allUsers.filter(el => el.category === 'teacher');
const admin = allUsers.filter(el => el.category === 'admin');


students.map((e) => {
    if (e.active === true) {
      usersActive++;
    } else if (e.active === false) {
      usersInactive++;
    }
  });
  teachers.map((e) => {
    if (e.active === true) {
      teachersActive++;
    } else if (e.active === false) {
      teachersInactive++;
    }
  });
  admin.map((e) => {
    if (e.active === true) {
      adminActive++;
    } else if (e.active === false) {
      adminInactive++;
    }
  });
  return (
    <div className ="u__Stats">
    <div className ="studentStats user_stats ">
      <div><span>✔️</span> Estudiantes activos: {usersActive}</div>
      <div><span>❌</span> Estudiantes inactivos: {usersInactive}</div>
      <br/>
    </div>
    <div className ="user_stats teacherStats">
      <div><span>✔️</span> Profesores/as activos: {teachersActive}</div>
      <div><span>❌</span> Profesores/as inactivos: {teachersInactive}</div>
      <br/>
    </div>
    <div className ="user_stats adminStats">
      <div><span>✔️</span> Administradores/as activos: {adminActive}</div>
      <div><span>❌</span> Administradores/as inactivos: {adminInactive}</div>
      <br/>
    </div>
  
    </div>
    
  );
};

export default UsersStats;
