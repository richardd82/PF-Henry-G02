import React from 'react'
import { useSelector } from 'react-redux'
import Modulebutton from '../../components/AttendantComponents/ModuleButton'
// import Nav from '../../components/NavBar/Nav'

function Attendant({ user }) {

    // const dispatch = useDispatch()


  return (
    <div>
      {/* <Nav user={user}/> */}
      <div>
       <Modulebutton />
      </div>
    </div>
  )
}

export default Attendant;
