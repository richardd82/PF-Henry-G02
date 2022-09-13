import React from 'react'
import Nav from '../Nav/Nav'
import Classnames from '../AttendantComponents/classNames';
import DashboardStudent from '../Students/DashboardStudents/DashboardStudent';


const Ta = ({user}) => {
  return (
    <div>
      <Nav user={user} />
      <Classnames/>
      <DashboardStudent />
      </div>
  )
}

export default Ta