import React, { useEffect } from 'react'
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritesById, getTodosUsuarios } from '../../redux/actions';



function FavouriteButton({user, userId, videoId}) {

const dispatch = useDispatch();
const users = useSelector(state => state.users.allUsers);



let userValidate = ''
if (!user.category) {
    userValidate= users.filter((e) => e.name === user._json.name );
  }else{
    userValidate = users.filter((e) => e.name === user.name );
    }


  //const userValidate = users.find(e => e.name === userId.displayName);
  const loginUserId = userValidate.map(e=>e.id).toString(); 

const addFavourite = (e) =>{
    e.preventDefault()
    console.log("CLICKEASTE,", loginUserId, videoId)
     if (!users.length) {
      dispatch(getTodosUsuarios());
    } 
    dispatch(addFavoritesById(loginUserId, videoId));
}

  return (
    <div className='b__corazon'>
      <button style={{cursor:"pointer"}}onClick={(e)=>addFavourite(e)}>
        <FiHeart style={{color:"white"}}/>
        </button>
    </div>
  )
}

export default FavouriteButton