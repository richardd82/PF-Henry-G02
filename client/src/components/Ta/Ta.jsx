import React from 'react'
import Nav from '../Nav/Nav'
import Classnames from '../AttendantComponents/classNames';
import DashboardStudent from '../Students/DashboardStudents/DashboardStudent';
import Attendance from '../AttendantComponents/Attendance';


const Ta = ({user}) => {
  return (
    <div>
      <Nav user={user} />
      <DashboardStudent />
      <Attendance user={user} />
      </div>
  )
}

export default Ta