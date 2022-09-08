import React from "react";
import {Link} from 'react-router-dom'

export default function TeacherDashboard (){
    return (
        <div>
            <Link to={'/teacher/create'}>
                <botton>CREAR CLASE</botton>
            </Link>
            <Link to={'/teacher/update'}>
                <botton>MODIFICAR CLASE</botton>
            </Link>
        </div>
        
    )
}