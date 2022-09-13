import axios from 'axios';

const REQUEST = 'GET_REQUEST';
const GET_CLASSES = 'GET_CLASSES';
const GET_CLASSES_BY_ID = 'GET_CLASSES_BY_ID';
const GET_CLASSES_BY_NAME = 'GET_CLASSES_BY_NAME';
const CREATE_CLASS = 'CREATE_CLASS';
const CLEAR_STATE_CLASSES = 'CLEAR_STATE_CLASSES';

export function getClasses() {
  return async function (dispatch) {
    dispatch(request());
    var classes = await axios.get(`http://localhost:3002/classes`);
    return dispatch({
      type: GET_CLASSES,
      payload: classes.data,
    });
  };
}

export const request = () => {
  return {
    type: REQUEST,
  };
};

export function getClassesById(id) {
  return async function (dispatch) {
    var classesById = await axios.get(
      `http://localhost:3002/classes/byId/${id}`
    );
    return dispatch({
      type: GET_CLASSES_BY_ID,
      payload: classesById.data,
    });
  };
}

export function getClassesByName(name) {
  return async function (dispatch) {
    const filtered = await axios.get(
      `http://localhost:3002/classes/byName?name=${name}`
    );
    return dispatch({
      type: GET_CLASSES_BY_NAME,
      payload: filtered.data,
    });
  };
}

export function createClass(newClass) {
  return async function(dispatch) {
    const createdClass = await axios.post('http://localhost:3002/classes/create', newClass)
    return dispatch({
      type: CREATE_CLASS,
      payload: createdClass.data,
    })
  }
}

export function clearStateClasses() {
  return {
    type: CLEAR_STATE_CLASSES,
  };
}
