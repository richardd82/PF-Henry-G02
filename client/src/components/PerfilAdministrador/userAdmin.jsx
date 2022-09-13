import React from "react";
import { getUsers } from "../../redux/actions/userAdminActions";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";


const userAdmin = () => {

    const adminUser = useSelector((state) => state.users.allUsers);
    console.log("ESTO ME LLEGA DE USERS:", adminUser);

}


export default userAdmin;