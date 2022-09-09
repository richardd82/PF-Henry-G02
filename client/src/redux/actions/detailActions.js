import axios from "axios";

const GET_LESSONS_BY_ID = "GET_LESSONS_BY_ID";
const GET_LESSONS = "GET_LESSONS";
const CLEAR_STATE = "CLEAR_STATE";

export function getLessonsById(id) {
  return async function (dispatch) {
    var json = await axios.get(`https://localhost:3001/classes/byId/${id}`);
    return dispatch({
      type: GET_LESSONS_BY_ID,
      payload: json.data,
    });
  };
}
export function getLessons() {
  return async function (dispatch) {
    var json = await axios.get(`https://localhost:3001/classes`);
    return dispatch({
      type: GET_LESSONS,
      payload: json.data,
    });
  };
}
export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}
