import React from 'react';
import Attendance from '../AttendantComponents/Attendance.jsx';
import Nav from '../Nav/Nav';
// import Classnames from '../AttendantComponents/classNames';

const Ta = ({ user }) => {
  return (
    <div>
      <Nav user={user} />
      <Attendance user={user} />
    </div>
  );
};

export default Ta;
