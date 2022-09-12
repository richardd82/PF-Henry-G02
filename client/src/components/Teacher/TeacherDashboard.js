import React from "react";
import {Link} from 'react-router-dom'

export default function TeacherDashboard (){
    return (
        <div>
            <Link to={'/createVideo'}>
                <button>Subir Video</button>
            </Link>
            {/* <Link to={'/updateclass'}>
                <button>Modificar Clase</button>
            </Link> */}
        </div>
        
    )
}