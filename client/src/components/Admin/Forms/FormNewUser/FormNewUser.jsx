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
import "../Formularios.css";

const FormNewUser = ({ user }) => {
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const adminUser = useSelector((state) => state.users);
  const cohortsExistentes = useSelector((state) => state.cohorts.allCohorts);
  const supExistente = useSelector((state) => state.standUps.allStandUp);
  const moduleExistente = useSelector((state) => state.modules.modules);
  const userEmail = adminUser.users.map((e) => e.email);
  //const categoryUsers = adminUser.users.map(e => e.category);
  //const category = [...new Set(categoryUsers)]

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
  //const [checkedCategory, setCheckedCategory] = useState([]);

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
  //const [checked, setChecked ] = useState(true)
  const handleCategory = (e) => {
    setInput({
      ...input,
      category: e.target.value
    })

  }

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
  const emailExistente = userEmail.find((e) => e === input.email);
  //console.log(emailExistente);

  const handleSubmit = (e) => {
    e.preventDefault(e);
    if (emailExistente) {
      return alert("This user email already exist");
    } else {
      dispatch(postNewUser(input));
      alert("User created");
      setInput({
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
    }
  };

  const supFiltered = supExistente.filter(el => el.cohortId === input.cohortId)

  return (
    <>
      <Nav user={user} />
      <div className="parent-forms">
        <div className="container-forms">
          <h1 className="title-forms">Create new user </h1>
          <br></br>
          <form
            className="form-forms"
            autoComplete="off"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <label>Name:</label>
            <input
              className="inputCreate-forms"
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
              className="inputCreate-forms"

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
              className="inputCreate-forms"

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
            <div className="check-forms">
              <label>Estudiante<input type={'radio'} name={'category'} value={'student'} onChange={(e) => handleCategory(e)} /></label>
              <label>Instructor/a<input type={'radio'} name={'category'} value={'teacher'} onChange={(e) => handleCategory(e)} /></label>
              <label>Admin<input type={'radio'} name={'category'} value={'admin'} onChange={(e) => handleCategory(e)} /></label>
            </div>


            {/*           <input
          className="inputCreate"

            placeholder="Insert a user role"
            type="text"
            value={input.category}
            name="category"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          ></input> */}
            <select
              className="select-forms"
              onChange={handleSelectCohorte}>
              <option> Select cohort</option>
              {cohortsExistentes?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <select
              className="select-forms"
              onChange={handleSelectModule}>
              <option> Select module</option>
              {moduleExistente?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            <select
              className="select-forms"
              onChange={handleSelectSup}>
              <option> Select Standup</option>
              {supFiltered?.map((e) => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
            </select>
            {/* {errors.category && <h1>{errors.category}</h1>} */}
            <button className="submitButton-forms" type="submit"> Create User</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormNewUser;
