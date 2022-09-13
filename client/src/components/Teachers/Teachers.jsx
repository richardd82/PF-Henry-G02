import React from "react";
import Nav from "../Nav/Nav";
import TeacherDashboard from "../Teacher/TeacherDashboard";

const Teachers = ({ user }) => {
	return (
		<div>
			<Nav user={user} />
			<TeacherDashboard />
		</div>
	);
};

export default Teachers;
