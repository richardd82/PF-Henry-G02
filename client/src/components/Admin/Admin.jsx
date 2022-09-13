import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserAdmin from '../../pages/AdminProfile/UserAdmin'
import Nav from '../Nav/Nav'
import { FormsCreate } from './Forms/FormsCreate/FormsCreate'

const Admin = ({user}) => {
  return (
    <div>
    
      <Nav user={user} />
      <UserAdmin /> 

    </div>
  )
}

export default Admin