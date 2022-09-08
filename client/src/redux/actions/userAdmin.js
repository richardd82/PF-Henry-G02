import axios from "axios";

const GET_ALL_USERS = "GET_ALL_USERS";
const GET_ALL_COHORTS = "GET_ALL_COHORTS";
const GET_ALL_STANDUPS = "GET_ALL_STANDUPS";
const GET_ALL_CLASSES = "GET_ALL_CLASSES";

//ACTIONS GET/CREATE USERS

export function getTodosUsuarios() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3002/users");
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postNewUser(payload) {
  return async function () {
    var json = await axios.post(`http://localhost:3002/users/create`, payload);
    return json;
  };
}

//ACTIONS GET/CREATE COHORTS

export function getAllCohorts() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3002/cohorts");
      return dispatch({
        type: GET_ALL_COHORTS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postNewCohort(payload) {
  return async function () {
    var json = await axios.post(
      `http://localhost:3002/cohorts/create`,
      payload
    );
    return json;
  };
}

//ACTIONS GET/CREATE STAND UPS
export function getAllStandUps() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3002/standups");
      return dispatch({
        type: GET_ALL_STANDUPS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postNewStandUp(payload) {
  return async function () {
    var json = await axios.post(
      `http://localhost:3002/standups/create`,
      payload
    );
    return json;
  };
}

//ACTIONS GET/CREATE CLASSES

export function getAllClasses() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3002/classes");
      return dispatch({
        type: GET_ALL_CLASSES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function postNewClass(payload) {
  return async function () {
    var json = await axios.post(
      `http://localhost:3002/classes/create`,
      payload
    );
    return json;
  };
}
