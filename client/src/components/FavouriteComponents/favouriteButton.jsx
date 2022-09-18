import React, { useEffect } from 'react'
import { FiHeart } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { addFavoritesById, getTodosUsuarios } from '../../redux/actions';



function FavouriteButton({userId, videoId}) {

const dispatch = useDispatch();
const users = useSelector(state => state.users.allUsers);
  const userValidate = users.find(e => e.name === userId.displayName);
  const loginUserId = userValidate && userValidate.id;
  console.log(loginUserId); 

const addFavourite = (e) =>{
    e.preventDefault()
    console.log("CLICKEASTE,", loginUserId, videoId)
     if (!users.length) {
      dispatch(getTodosUsuarios());
    } 
    dispatch(addFavoritesById(loginUserId, videoId));
}

  return (
      <button onClick={(e)=>addFavourite(e)}>
        <FiHeart/>
        </button>
  )
}

export default FavouriteButton