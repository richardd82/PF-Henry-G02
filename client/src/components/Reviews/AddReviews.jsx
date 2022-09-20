import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addReview,
  getAllStandUps,
  getTodosUsuarios,
} from "../../redux/actions";
// import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import "./AddReview.css";
// import { FaCheck } from "react-icons/fa";
// import { TiDelete } from "react-icons/ti";
// import { useState } from "react";
// import {Rating} from '@mui/material/Rating';
// import Box from '@mui/material/Box';
// import StarIcon from '@mui/icons-material/Star';
import { Link } from "react-router-dom";

export default function AddReview({user}){
/*     const user = {
        name: "Romi Jimenez",
        id: "105104a9-9e18-4934-b950-18de117aa014",
        standupId: "6c5dc9cc-460c-408c-8cb8-cfa94af873ec",
        lastname: "Jimenez",
        email: "romijimenez06@gmail.comimage",
        category: "ta",
        active: true,
      }; */

      //MODIFICAR CUANDO SE PUEDA INGRESAR CON LOGIN
    const dispatch = useDispatch()
    const users = useSelector(state=> state.users.users)

    useEffect(()=>{
        dispatch(getTodosUsuarios())
    },[dispatch])

    let userValidate = ''

    if (!user.category) {
        userValidate = users.filter((e) => e.name === user._json.name );
      }else{
        userValidate = users.filter((e) => e.name === user.name );
        }
const stydents = users.filter(e=> e.category === 'student')
const ta = userValidate.map(e=> e.standupId).toString()
const usersSUP = stydents.map(e=> e.standupId)
const filtered = stydents.filter(e => e.standupId === ta)



    return (
        <div>
            {
                filtered && filtered.map(e => {
                    //if(e === ta && e.category === "student")
                   
                    return (
                    <Link to={`/reviews/create/${e.id}`}>
                    <p>
                        {e.name} {e.lastname}
                    </p>
                    </Link>
                    )
                } )
            }
        </div>
    )
}
