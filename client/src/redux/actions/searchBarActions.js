import axios from 'axios';

export const REQUEST = 'GET_REQUEST',
  REQUEST_FAILURE = 'REQUEST_FAILURE',
  GET_BY_NAME_SUCCESS = 'GET_BY_NAME_SUCCESS',
  GET_ALL_CLASSES_SUCCESS = 'GET_ALL_CLASSES_SUCCESS';

// Petición por nombre desde un query en SearchBar
export const getClassesByName = name => {
  return dispatch => {
    // Dispatch para cambiar el estado `loading` a `true`
    // más adelante útil para renderizar loaders
    dispatch(request());
    // Ahora sí, la petición por nombre
    // De tener éxito llenamos el estado con las clases
    // Si no, llenamos el estado `errorMsg` con el error
    // Más adelante se definen las otras acciones llamadas acá
    axios
      .get(`http://localhost:3002/classes/byName?name=${name}`)
      .then(response => dispatch(getByNameSuccess(response.data)))
      .catch(error => dispatch(requestFailure(error.response.data)));
  };
};

export const request = () => {
  return {
    type: REQUEST,
  };
};

export const getByNameSuccess = classes => {
  return {
    type: GET_BY_NAME_SUCCESS,
    payload: classes,
  };
};

export const requestFailure = errorMsg => {
  return {
    type: REQUEST_FAILURE,
    payload: errorMsg,
  };
};

export const getAllClasses = () => {
  return dispatch => {
    dispatch(request());
    axios
      .get(`http://localhost:3002/classes`)
      .then(response => dispatch(getAllClassesSuccess(response.data)))
      .catch(error => dispatch(requestFailure(error.response.data)));
  };
};

export const getAllClassesSuccess = classes => {
  return {
    type: GET_ALL_CLASSES_SUCCESS,
    payload: classes,
  };
};
