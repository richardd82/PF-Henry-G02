import React from 'react';
import Attendance from '../AttendantComponents/Attendance.jsx';
import Nav from '../Nav/Nav';
// import Classnames from '../AttendantComponents/classNames';

const Ta = ({ user }) => {
  return (
    <div className="ta__container">
      <Nav user={user} />
      <div className="ta__attendance">
      <Attendance user={user} />
      </div>
    </div>
  );
};

export default Ta;
