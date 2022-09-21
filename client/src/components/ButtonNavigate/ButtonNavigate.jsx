import React from "react";
import { useNavigate } from "react-router-dom";

export default function ButtonNavigate(){
    const navigate = useNavigate()
    return (
        <>
        <button onClick={()=>navigate(-1)}>REGRESAR</button>
        </>
    )
}