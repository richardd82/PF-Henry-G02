import React, { useEffect } from 'react'
import Catalog from '../../pages/Catalog/Catalog'
import Nav from '../Nav/Nav'
import DashboardStudent from './DashboardStudents/DasboardStudent'

const Students = ({user}) => {
 

  return (
    <div>

    <Nav user={user} />
    <DashboardStudent />
    <Catalog/>
    

    </div>
  )
}

export default Students