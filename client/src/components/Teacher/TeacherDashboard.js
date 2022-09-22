import React from "react";
import { Link } from 'react-router-dom';
import logoGrande from '../../assets/media/logohenry2.png';
import '../Students/DashboardStudents/dashboard.css'


export default function TeacherDashboard({ user }) {

    return (
        <div>

            <Link to={'/createVideo'}>
                <button>Subir Video</button>
            </Link>
            <div className="logo">
                <img src={logoGrande} />
            </div>
            {/* <Link to={'/updateclass'}>
                <button>Modificar Clase</button>
            </Link> */}
        </div>

    )
}