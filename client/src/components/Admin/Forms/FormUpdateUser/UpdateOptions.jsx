import React, { useEffect, useState } from "react";
import {
  getAllModules,
  getAllStandUps,
  getCohorts,
  getTodosUsuarios,
  putUser,
} from "../../../../redux/actions/index.js";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Nav from "../../../Nav/Nav.jsx";
import "../Formularios.css";

const UpdateOptions = ({ user }) => {
  const dispatch = useDispatch();
  const updateUser = useSelector((state) => state.users);
  const supExistente = useSelector((state) => state.standUps.allStandUp);
  const moduleExistente = useSelector((state) => state.modules.modules);
  const cohortsExistentes = useSelector((state) => state.cohorts.allCohorts);

  useEffect(() => {
    dispatch(getTodosUsuarios());
    dispatch(getAllModules());
    dispatch(getCohorts());
    dispatch(getAllStandUps());
  }, [dispatch]);
  const [input, setInput] = useState({
    name: updateUser.users.name,
    lastname: updateUser.users.lastname,
    active: updateUser.users.active,
    category: updateUser.users.category,
    cohortId: supExistente.id,
    moduleId: moduleExistente.id,
    standupId: cohortsExistentes.id,
  });

  const handleCategory = (e) => {
    setInput({
      ...input,
      category: e.target.value
    })
  }
console.log(input.category);
  const handleActive = (e) => {
    setInput({
      ...input,
      active: e.target.value
    })
  }
  console.log(input.active);
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
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  // console.log(updateUser.users.map((e) => e.active));
  const { id } = useParams();
  const handleSubmit = (e) => {
    dispatch(putUser(id, input));
    alert("User Updated");

    setInput({
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      active: input.active,
      category: input.category,
    });
  };

  return (
    <>
      <Nav user={user} />
      <div>
        <div>
          {updateUser.users.map((e) => {
            if (window.location.pathname === `/update/${e.id}`) {
              return (
                <div key={e.id}>
                  <div>
                    <form
                      className="form"
                      onSubmit={(e) => {
                        handleSubmit(e);
                      }}
                      autoComplete="off"
                    >
                      <div className="container">
                        {" "}
                        <label>Name</label>
                        <input
                          className="inputCreate"
                          placeholder={`${e.name}`}
                          name="name"
                          required
                          defaultValue={e.name}
                          value={input.name}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        {/* {errors.name && <h1>{errors.name}</h1>} */}
                        <label>Lastname</label>
                        <input
                          className="inputCreate"
                          placeholder={`${e.lastname}`}
                          name="lastname"
                          defaultValue={e.lastname}
                          required
                          value={input.lastname}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <label>E-mail</label>
                        <input
                          className="inputCreate"
                          placeholder={`${e.email}`}
                          name="email"
                          defaultValue={e.email}
                          required
                          value={e.email}
                          onChange={(e) => {
                            handleChange(e);
                          }}
                        />
                        <label>Category</label>
                        <div>
                          <label>Estudiante<input type={'radio'} name={'category'} value={'student'} onChange={(e)=>handleCategory(e)}/></label>
                          <label>Instructor/a<input type={'radio'} name={'category'} value={'teacher'} onChange={(e)=>handleCategory(e)}/></label>
                          <label>Administrador/a<input type={'radio'} name={'category'} value={'admin'} onChange={(e)=>handleCategory(e)}/></label>
                          <label>TA<input type={'radio'} name={'category'} value={'ta'} onChange={(e)=>handleCategory(e)}/></label>
                         </div> 
                         <div>
                        <label>Estado</label>
                        <label>Activo<input type={'radio'} name={'active'} value={true} onChange={(e)=>handleActive(e)}/></label>
                        <label>Inactivo<input type={'radio'} name={'active'} value={false} onChange={(e)=>handleActive(e)}/></label>
                         </div>

                        
                        <select
                          className="select"
                          onChange={handleSelectCohorte}
                        >
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
                          className="select"
                          onChange={handleSelectModule}
                        >
                          <option> Select module</option>
                          {moduleExistente?.map((e) => {
                            return (
                              <option key={e.id} value={e.id}>
                                {e.name}
                              </option>
                            );
                          })}
                        </select>
                        <select className="select" onChange={handleSelectSup}>
                          <option> Select Standup</option>
                          {supExistente?.map((e) => {
                            return (
                              <option key={e.id} value={e.id}>
                                {e.name}
                              </option>
                            );
                          })}
                        </select>
                        <h2 style={{ color: "red" }}>
                          <br></br>
                          IF COHORT, STANDUP OR MODULE DONT BE UPDATED, DONT
                          SELECT ANYTHING
                        </h2>
                        <button className="submitButton" type="submit">
                          UPDATE
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};

export default UpdateOptions;
