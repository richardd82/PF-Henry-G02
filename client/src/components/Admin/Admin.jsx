import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import UserAdmin from '../../pages/AdminProfile/UserAdmin'
import Nav from '../Nav/Nav'
import { FormsCreate } from './Forms/FormsCreate/FormsCreate'

const Admin = ({user}) => {
  
  return (
    <div>
    
     <Nav user={user} /> 
      <UserAdmin /> 
      <Link to="/reviews">
          <p>Ver reviews</p>
      </Link>
    </div>
  )
}

export default Admin