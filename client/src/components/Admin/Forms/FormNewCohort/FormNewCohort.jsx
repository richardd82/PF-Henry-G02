import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import { getCohorts, postNewCohort } from "../../../../redux/actions/index";
import { useEffect } from "react";
import Nav from "../../../Nav/Nav";
import "../Formularios.css";

const FormNewCohort = ({ user }) => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.cohorts);
  const cohortName = adminUser.cohorts.map((e) => e.name);
  console.log(cohortName);
  const [input, setInput] = useState({
    name: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      Validations({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  useEffect(() => {
    dispatch(getCohorts());
  }, [dispatch]);
  const cohortExistente = cohortName.find((e) => e === input.name);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (cohortExistente) {
      return alert("Cohort already exist");
    } else {
      dispatch(postNewCohort(input));
      alert("Cohort Created");
      setInput({
        name: "",
      });
    }
  };
  return (
    <>
      <Nav user={user} />
      <div className="parent">
        <div className="container">
          <h1 className="title">Create new cohort </h1>
          <br></br>
          <form
          className="form"
            autoComplete="off"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label>
              <b>*</b>Cohort name:
            </label>
            <input
            className="inputCreate"
              placeholder="Title"
              type="text"
              value={input.name}
              name="name"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            ></input>

            {/* {errors.name && <h1>{errors.name}</h1>} */}
            <button className="submitButton" type="submit"> Create</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormNewCohort;
