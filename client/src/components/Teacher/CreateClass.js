import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  createClass,
  getCohorts,
  getModules,
} from '../../redux/actions/teacherActions';
// Error handler
import { createClassErrors } from '../../helpers/setCreateClassErrors';


export default function CreateClass() {
  const dispatch = useDispatch();
  const modules = useSelector(state => state.teacher.modules);
  const cohorts = useSelector(state => state.teacher.cohorts);
  
  //console.log(teacher);

  useEffect(() => {
    dispatch(getCohorts());
    dispatch(getModules());
  }, [dispatch]);

  const [input, setInput] = useState({
    name: '',
    description: '',
    moduleId: '',
    cohortId: '',
  });

  // los videos deberian ser archivos adjuntos???
  const [warnings, setWarnings] = useState({
    name: '',
    moduleId: '',
    cohortId: '',
    teacherId: '',
    errorMsg: '',
    error: false,
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setWarnings(createClassErrors(input));
  }

  function handleSelect(e) {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setWarnings(createClassErrors(input));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (warnings.error) {
      setWarnings(prev => {
        return {
          ...prev,
          errorMsg: 'Llena todos los campos obligatorios',
        };
      });
    } else {
      dispatch(createClass(input));
      setInput({
        name: '',
        description: '',
        moduleId: '',
        cohortId: '',
      });
    }
  }

  //console.log('INPUT', input);
  //console.log('WARNING', warnings);

  return (
    <div>
      <h1>Creación de Clase</h1>
      {warnings.errorMsg ? <p>{warnings.errorMsg}</p> : null}
      <form onSubmit={e => handleSubmit(e)}>
        <div>
          <label>Nombre</label>
          <input
            type="text"
            name="name"
            value={input.name}
            placeholder={'Nombre...'}
            onChange={e => handleChange(e)}
          />
          {warnings.name ? <p>{warnings.name}</p> : null}
        </div>
        <div>
          <label>Descripción</label>
          <textarea
            type="text"
            name="description"
            value={input.description}
            placeholder={'Descripcion...'}
            onChange={e => handleChange(e)}
          ></textarea>
        </div>
        <div>
          <label>Módulos</label>
          <select name="moduleId" onChange={e => handleSelect(e)}>
            {modules &&
              modules.map(e => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
          </select>
          {warnings.moduleId ? <p>{warnings.moduleId}</p> : null}
        </div>
        <div>
          <label>Cohortes</label>
          <select name="cohortId" onChange={e => handleSelect(e)}>
            {cohorts &&
              cohorts.map(e => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
          </select>
          {warnings.cohortId ? <p>{warnings.cohortId}</p> : null}
        </div>
        {/* <div>
          <label>Teacher</label>
          <select name="nameTeacher" onChange={e => handleSelect(e)}>
            {teacher &&
              teacher.map(e => {
                return (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                );
              })}
          </select>
          {warnings.teacherId ? <p>{warnings.teacherId}</p> : null}
        </div> */}
        <div>
          <input type="submit" value="CREAR CLASE" />
        </div>
      </form>
    </div>
  );
}
