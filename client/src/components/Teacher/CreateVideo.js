import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { getCohorts, getTeachers } from '../../redux/actions/index';
import { createVideo } from '../../redux/actions/index';
// Helpers
import { setVideoErrors } from '../../helpers/setVideoErrors';

const CreateVideo = () => {
  const dispatch = useDispatch();
  const teachers = useSelector(state => state.users.teachers);
  const cohorts = useSelector(state => state.cohorts.allCohorts);

  useEffect(() => {
    dispatch(getCohorts());
    dispatch(getTeachers());
  }, [dispatch]);

  // Control de inputs
  const [input, setInput] = useState({
    name: '',
    type: '',
    link: '',
    cohortId: '',
    userId: '',
  });

  // Control de errores
  const [warnings, setWarnings] = useState({
    name: '',
    type: '',
    link: '',
    cohortId: '',
    userId: '',
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
    setWarnings(setVideoErrors(input));
  }

  function handleSelect(e) {
    const { name, value } = e.target;
    setInput(prev => {
      return {
        ...prev,
        [name]: value,
      };
    });
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
      dispatch(createVideo(input));
      setInput({
        name: '',
        type: '',
        link: '',
        cohortId: '',
        teacherId: '',
      });
    }
  }
  console.log(input)
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
            placeholder={'Nombre del vídeo...'}
            onChange={e => handleChange(e)}
          />
          {warnings.name ? <p>{warnings.name}</p> : null}
        </div>
        <div>
          <label>Link al vídeo</label>
          <input
            type="text"
            name="link"
            value={input.link}
            placeholder={'Enlace al vídeo'}
            onChange={e => handleChange(e)}
          />
          {warnings.link ? <p>{warnings.link}</p> : null}
        </div>
        <div>
          <label>Tipo</label>
          <select name="type" onChange={e => handleSelect(e)}>
            <option value="lecture">Lecture</option>
            <option value="code-review">Code Review</option>
          </select>
          {warnings.type ? <p>{warnings.type}</p> : null}
        </div>
        <div>
          <label>Profesor</label>
          <select name="userId" onChange={e => handleSelect(e)}>
            {teachers &&
              teachers.map(e => {
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
        <div>
          <input type="submit" value="SUBIR VIDEO" />
        </div>
      </form>
    </div>
  );
};

export default CreateVideo;
