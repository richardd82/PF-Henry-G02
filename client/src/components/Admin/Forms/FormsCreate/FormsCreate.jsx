import React from "react";
import Nav from "../../../Nav/Nav";
import FormNewCohort from "../FormNewCohort/FormNewCohort";
import FormNewStandUp from "../FormNewSup/FormNewSup";
import FormNewUser from "../FormNewUser/FormNewUser";
import "../FormsCreate/Create.css";

export const FormsCreate = ({user}) => {
	return (
		<div>
			<div>
				<Nav user={user} />
			</div>
			<div className="row">
				<div>
					<FormNewUser />
				</div>
				<div>
					<FormNewCohort />
				</div>
				<div>
					<FormNewStandUp />
				</div>
			</div>
		</div>
	);
};
