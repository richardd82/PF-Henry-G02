import React, { useEffect } from "react";
import { useState } from "react";
import {
  postNewClass,
  getAllClasses,
  getAllModules,
} from "../../../../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import { Validations } from "./validations";

const FormNewClass = () => {
  const [errors, setErrors] = useState({});
  const modules = useSelector((state) => state.modules.allModules);
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    moduleId: "",
    description: "",
  });
  useEffect(() => {
    dispatch(getAllModules());
  }, []);

  console.log(modules);
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
  const handleSelectModule = (e) => {
    e.preventDefault(e);
    setInput({
      ...input,
      moduleId: e.target.value,
    });
  };
  const handleSubmite = (e) => {
    e.preventDefault(e);

    dispatch(postNewClass(input));
    alert("User Created");
    setInput({
      name: "",
      moduleId: "",
      description: "",
    });
  };

  return (
    <div>
      <h1>Hola</h1>
      <form
        autoComplete="off"
        onSubmit={(e) => {
          handleSubmite(e);
        }}
      >
        <label>
          <b>*</b>Título de la clase
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

        <label>Descripción</label>
        <input
          placeholder="Descripción"
          type={"text"}
          value={input.description}
          name="description"
          required
          onChange={handleChange}
        ></input>
        <select onChange={handleSelectModule}>
          <option>MODULOS</option>
          {modules?.map((e) => {
            return <option value={e.id}>{e.name}</option>;
          })}
        </select>
        <button type="submit"> Create Class</button>
      </form>
    </div>
  );
};
export default FormNewClass;
