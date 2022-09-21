import React from 'react';
import { Link } from 'react-router-dom';
import Attendance from '../AttendantComponents/Attendance.jsx';
import Nav from '../Nav/Nav';
import DasboardStudent from '../Students/DashboardStudents/DasboardStudent.jsx';
// import Classnames from '../AttendantComponents/classNames';

const Ta = ({ user }) => {
  return (
    <div>
      <Nav user={user} />
      <Link to={'/reviews/create'}>
      <button>Agregar reviews</button>
      </Link>
      <DasboardStudent user={user}/>
    </div>
  );
};

export default Ta;
