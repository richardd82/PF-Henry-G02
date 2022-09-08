import axios from 'axios';
export const GET_ALL_LESSONS = 'GET_ALL_LESSONS';
export const GET_ALL_MODULES = 'GET_ALL_MODULES';
export const CLEAR_STATE = 'CLEAR_STATE';

export function getAllLessons() {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3002/classes');
      return dispatch({
        type: GET_ALL_LESSONS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllModules() {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3002/modules');
      return dispatch({
        type: GET_ALL_MODULES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}
