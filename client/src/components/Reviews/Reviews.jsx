import React from 'react';
import { useSelector } from 'react-redux';

//traigo reviews, usuarios 
//verifico si user coincide con el id de user que me llega con la review
//si lo anterior es true 
export default function Reviews (){
    const users = useSelector(state => state.users)
    return (
        <div>

        </div>
    )
}
