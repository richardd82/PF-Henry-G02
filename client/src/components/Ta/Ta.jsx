import React from 'react'
import Nav from '../Nav/Nav'
import DashboardStudent from '../Students/DashboardStudents/DasboardStudent.jsx'


const Ta = ({user}) => {
  return (
    <div>
      <Nav user={user}/>
      <DashboardStudent />
    </div>
  )
}

export default Ta