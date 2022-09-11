import React from "react";
import {Link} from 'react-router-dom'

export default function TeacherDashboard (){
    return (
        <div>
            <Link to={'/createVideo'}>
                <botton>Subir Video</botton>
            </Link>
            <Link to={'/update'}>
                <botton>Modificar Clase</botton>
            </Link>
        </div>
        
    )
}