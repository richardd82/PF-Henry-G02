import React from "react";
import { useState } from "react";
import { getAllModules, postNewUser } from "../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";
import {
  getTodosUsuarios,
  getAllStandUps,
  getCohorts,
} from "../../../../redux/actions/index";
import { useEffect } from "react";
import Nav from "../../../Nav/Nav";

const FormNewUser = ({ user }) => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.users.users);
  const cohortsExistentes = useSelector((state) => state.cohorts.allCohorts);
  const supExistente = useSelector((state) => state.standUps.allStandUp);
  const moduleExistente = useSelector((state) => state.modules.modules);
  const usersExist = adminUser.map((e) => e.email);
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    image: "image",
    password: "123",
    active: true,
    category: "",
    cohortId: "",
    moduleId: "",
    standupId: "",
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
  const handleSelectCohorte = (e) => {
    e.preventDefault(e);
    setInput({
      ...input,
      cohortId: e.target.value,
    });
  };

  const handleSelectModule = (e) => {
    e.preventDefault(e);
    setInput({
      ...input,
      moduleId: e.target.value,
    });
  };
  const handleSelectSup = (e) => {
    e.preventDefault(e);
    setInput({
      ...input,
      standupId: e.target.value,
    });
  };
  useEffect(() => {
    dispatch(getTodosUsuarios());
    dispatch(getAllStandUps());
    dispatch(getCohorts());
    dispatch(getAllModules());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    dispatch(postNewUser(input));
    alert("User Created");
    e.target.reset();
  };

  return (
    <div>
      <Nav user={user} />
      <h1>Create new user </h1>
      <br></br>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label>Name:</label>
        <input
          placeholder="Insert a name"
          type="text"
          value={input.name}
          name="name"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.name && <h1>{errors.name}</h1>} */}

        <label>Last Name:</label>
        <input
          placeholder="Insert a lastname"
          type="text"
          value={input.lastname}
          name="lastname"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.lastname && <h1>{errors.lastname}</h1>} */}

        <label>Email:</label>
        <input
          placeholder="Insert a email"
          type="email"
          value={input.email}
          name="email"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        {/* {errors.email && <h1>{errors.email}</h1>} */}

        <label>Category:</label>
        <input
          placeholder="Insert a user role"
          type="text"
          value={input.category}
          name="category"
          onChange={(e) => {
            handleChange(e);
          }}
          required
        ></input>
        <select onChange={handleSelectCohorte}>
          <option> Select cohort</option>
          {cohortsExistentes?.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <select onChange={handleSelectModule}>
          <option> Select module</option>
          {moduleExistente?.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        <select onChange={handleSelectSup}>
          <option> Select Standup</option>
          {supExistente?.map((e) => {
            return (
              <option key={e.id} value={e.id}>
                {e.name}
              </option>
            );
          })}
        </select>
        {/* {errors.category && <h1>{errors.category}</h1>} */}
        <button type="submit"> Create User</button>
      </form>
    </div>
  );
};

export default FormNewUser;
