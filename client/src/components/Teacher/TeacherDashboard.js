import React from "react";
import {Link} from 'react-router-dom'

export default function TeacherDashboard (){
    return (
        <div>
            <Link to={'/teacher/create'}>
                <botton>CREAR CLASE</botton>
            </Link>
        </div>
    )
}