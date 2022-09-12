import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import { getCohorts, getTeachers } from "../../redux/actions/index";
import { createVideo } from "../../redux/actions/index";
// Helpers
import { setVideoErrors } from "../../helpers/setVideoErrors";
import "./Formularios.css";
import Nav from "../Nav/Nav";
const CreateVideo = ({user}) => {
  const dispatch = useDispatch();
  const teachers = useSelector((state) => state.users.teachers);
  const cohorts = useSelector((state) => state.cohorts.allCohorts);

  useEffect(() => {
    dispatch(getCohorts());
    dispatch(getTeachers());
  }, [dispatch]);

  // Control de inputs
  const [input, setInput] = useState({
    name: "",
    type: "",
    link: "",
    cohortId: "",
    userId: "",
  });

  // Control de errores
  const [warnings, setWarnings] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setWarnings(setVideoErrors(input));
  }

  function handleSelect(e) {
    const { name, value } = e.target;
    setInput((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (warnings.error) {
      setWarnings((prev) => {
        return {
          ...prev,
          errorMsg: "Llena todos los campos obligatorios",
        };
      });
    } else {
      dispatch(createVideo(input));
      alert("Clase creada correctamente");
      setInput({
        name: "",
        type: "",
        link: "",
        cohortId: "",
        teacherId: "",
      });
    }
  }
  console.log(input);
  return (
    <>
    <Nav user={user}/>
    <div className="parent">
      <div className="container">
        <h1 className="title">Creación de Clase</h1>
        {warnings.errorMsg ? <p>{warnings.errorMsg}</p> : null}
        <form  className="form" onSubmit={(e) => handleSubmit(e)}>
          <div class>
            <label>Nombre</label>
            <input
              required
              className="inputCreate"
              type="text"
              name="name"
              value={input.name}
              placeholder={"Nombre del vídeo..."}
              onChange={(e) => handleChange(e)}
            />
            {/* {warnings.name ? <p>{warnings.name}</p> : null} */}
          </div>
          <div>
            <label>Link al vídeo</label>
            <input
              className="inputCreate"
              required
              type="text"
              name="link"
              value={input.link}
              placeholder={"Enlace al vídeo"}
              onChange={(e) => handleChange(e)}
            />
            {/* {warnings.link ? <p>{warnings.link}</p> : null} */}
          </div>
          <div>
            <label>Tipo</label>
            <select
              className="select"
              name="type"
              onChange={(e) => handleSelect(e)}
            >
              <option value="lecture">Lecture</option>
              <option value="code-review">Code Review</option>
            </select>
            {warnings.type ? <p>{warnings.type}</p> : null}
          </div>
          <div>
            <label>Profesor</label>
            <select
              className="select"
              name="userId"
              onChange={(e) => handleSelect(e)}
            >
              <option>SELECT INSTRUCTOR</option>
              {teachers &&
                teachers.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  );
                })}
            </select>
            {warnings.userId ? <p>{warnings.userId}</p> : null}
          </div>
          <div>
            <label>Cohorte</label>
            <select
              className="select"
              name="cohortId"
              onChange={(e) => handleSelect(e)}
            >
              {cohorts &&
                cohorts.map((e) => {
                  return (
                    <option key={e.id} value={e.id}>
                      {e.name}
                    </option>
                  );
                })}
            </select>
            {warnings.cohortId ? <p>{warnings.cohortId}</p> : null}
          </div>
          <div>
            <button className="submitButton" type="submit" value="">
              SUBIR VIDEO
            </button>
          </div>
        </form>
      </div>
    </div>
    </>);
};

export default CreateVideo;
