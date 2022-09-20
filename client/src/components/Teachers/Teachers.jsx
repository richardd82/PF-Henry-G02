import React from "react";
import Nav from "../Nav/Nav";
import TeacherDashboard from "../Teacher/TeacherDashboard";
import CatalogTeacher from "./CatalogTeacher";

const Teachers = ({ user }) => {
  
	return (
		<div>
			<Nav user={user} />
			<TeacherDashboard />
			<CatalogTeacher user={user}/>
		</div>
	);
};

export default Teachers;
