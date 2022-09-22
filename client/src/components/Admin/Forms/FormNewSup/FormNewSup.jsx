import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import { getAllStandUps, getCohorts } from "../../../../redux/actions/index";
import { useEffect } from "react";
import { postNewStandUp } from "../../../../redux/actions/index";
import Nav from "../../../Nav/Nav";
import "../Formularios.css";

const FormNewStandUp = ({ user }) => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.standUps);
  const cohortsExistentes = useSelector((state) => state.cohorts.allCohorts);
  const supName = adminUser.standUp.map((e) => e.name);
  console.log(adminUser);

  const [input, setInput] = useState({
    name: "",
    cohortId: "",
  });

  const handleSelect = (e) => {
    e.preventDefault(e);
    setInput({
      ...input,
      cohortId: e.target.value,
    });
  };

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
    dispatch(getAllStandUps());
    dispatch(getCohorts());
  }, [dispatch]);
  const supExistente = supName.find((e) => e === input.name);
  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (supExistente) {
      return alert("StandUp already exist");
    } else {
      dispatch(postNewStandUp(input));
      alert("StandUp created");
      e.target.reset();
    }
  };

  return (
    <>
      <Nav user={user} />
      <div className="parent-forms">
        <div className="container-forms">
          <h1 className="title-forms">Create new Stand Up </h1>
          <br></br>
          <form  className="form-forms" autoComplete="off" onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
            className="inputCreate-forms"
              placeholder="Insert a name"
              type="text"
              value={input.name}
              name="name"
              onChange={handleChange}
              required
            ></input>
            <select className="select-forms" onChange={handleSelect}>
              <option> Select cohort</option>
              {cohortsExistentes?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            {/* {errors.name && <h1>{errors.name}</h1>} */}

            <button className="submitButton-forms" type="submit"> Create Stand Up </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormNewStandUp;
