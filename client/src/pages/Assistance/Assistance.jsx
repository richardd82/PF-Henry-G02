import React from 'react'
import { useSelector } from 'react-redux'
import Modulebutton from '../../components/AssistanceComponents/moduleButton'
import Nav from '../../components/NavBar/Nav'

function Assistance({ user }) {

    // const dispatch = useDispatch()


  return (
    <div>
      <Nav user={user}/>
      <div>
       <Modulebutton />
      </div>
    </div>
  )
}

export default Assistance
