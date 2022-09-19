import React, { useEffect } from 'react'
import Nav from '../Nav/Nav'
import DashboardStudent from './DashboardStudents/DasboardStudent'

const Students = ({user}) => {
 

  return (
    <div>

    <Nav user={user} />
    <DashboardStudent />
   
    

    </div>
  )
}

export default Students