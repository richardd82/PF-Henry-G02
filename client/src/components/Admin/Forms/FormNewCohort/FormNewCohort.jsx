import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import { getCohorts, postNewCohort } from "../../../../redux/actions/index";
import { useEffect } from "react";


const FormNewCohort = () => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.cohorts.allCohorts);
  console.log(adminUser);
  const usersExist = adminUser.map((e) => e.name);
  console.log(usersExist);
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
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (usersExist.every((r) => r.name == input.name)) {
      return alert("NAME ALREADY EXIST");
    } else if (Object.keys(errors).length) {
      return alert(Object.values(errors));
    } else {
      dispatch(postNewCohort(input));
      alert("Cohort Created");
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
