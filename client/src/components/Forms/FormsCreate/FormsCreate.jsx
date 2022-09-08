import React from "react";
import FormNewCohort from "../FormNewCohort/FormNewCohort";
import FormNewStandUp from "../FormNewSup/FormNewSup";
import FormNewUser from "../FormNewUser/FormNewUser";
import "../FormsCreate/Create.css";

export const FormCreate = () => {
  return (
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
  );
};
