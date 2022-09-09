import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import {
  getAllCohorts,
  postNewCohort,
} from "../../../redux/actions/userAdmin.js";
import { useEffect } from "react";

const FormNewCohort = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.usuarios);
  const cohortsName = adminUser.cohorts.map((e) => e.name);
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
  const cohortExist = cohortsName.find((e) => e === input.name);
  useEffect(() => {
    dispatch(getAllCohorts());
  }, [dispatch]);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (cohortExist) {
      return alert("That cohort already exist");
    } else {
      dispatch(postNewCohort(input));
      alert("Cohort created");
      setInput({
        name: "",
      });
    }
  };

  return (
    <div>
      <h1>Create new cohort </h1>
      <br></br>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>
          <b>*</b>Cohort name:
        </label>
        <input
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
        <button type="submit"> Create</button>
      </form>
    </div>
  );
};

export default FormNewCohort;
