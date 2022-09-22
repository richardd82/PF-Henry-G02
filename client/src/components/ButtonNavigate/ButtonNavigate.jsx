import React from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";


export default function ButtonNavigate(){
    const navigate = useNavigate()
    return (
        <>
        <div>
        <button onClick={()=>navigate(-1)}><FiChevronsLeft/></button>
        <button onClick={()=>navigate(+1)}><FiChevronsRight/></button>
        </div>
        </>
    )
}