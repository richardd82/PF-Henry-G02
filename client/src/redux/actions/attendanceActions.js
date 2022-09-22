import axios from 'axios';

export const FETCHING = 'FETCHING';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_ALL_COHORTS = 'GET_ALL_COHORTS';
export const GET_ALL_MODULES = 'GET_ALL_MODULES';
export const GET_ALL_STANDUPS = 'GET_ALL_STANDUPS';
export const GET_ALL_LECTURES = 'GET_ALL_LECTURES';
export const GET_ATTENDANCES = 'GET_ATTENDANCES';



export const getUsers = () => {
  return dispatch => {
    dispatch(fetching());
    axios
      .get('http://localhost:3001/users')
      .then(response => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const fetching = () => {
  return {
    type: FETCHING,
  };
};

export const getUsersSuccess = users => {
  return {
    type: GET_ALL_USERS,
    payload: users,
  };
};

export const getCohorts = () => {
  return dispatch => {
    dispatch(fetching());
    axios
      .get('http://localhost:3001/cohorts')
      .then(response => {
        dispatch(getCohortsSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const getCohortsSuccess = cohorts => {
  return {
    type: GET_ALL_COHORTS,
    payload: cohorts,
  };
};

export const getModules = () => {
  return dispatch => {
    dispatch(fetching());
    axios
      .get('http://localhost:3001/modules')
      .then(response => {
        dispatch(getModulesSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const getModulesSuccess = modules => {
  return {
    type: GET_ALL_MODULES,
    payload: modules,
  };
};

export const getStandups = () => {
  return dispatch => {
    dispatch(fetching());
    axios
      .get('http://localhost:3001/standups')
      .then(response => {
        dispatch(getStandupsSuccess(response.data));
      })
      .catch(error => console.log(error));
  };
};

export const getStandupsSuccess = standups => {
  return {
    type: GET_ALL_STANDUPS,
    payload: standups,
  };
};

export const getAllClasses = () => {
  return dispatch => {
    dispatch(fetching());
    axios.get('http://localhost:3001/classes').then(response => {
      dispatch(getLecturesSuccess(response.data));
    });
  };
};

export const getLecturesSuccess = lectures => {
  return {
    type: GET_ALL_LECTURES,
    payload: lectures,
  };
};

export const postAttendance = attendance => {
  return () => {
    axios
      .post('http://localhost:3001/attendance/create', attendance)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };
};

export const getAttendances = (standupId, cohortId, classId) => {
  return dispatch => {
    axios.get(`http://localhost:3001/attendance?standupId=${standupId}&cohortId=${cohortId}&classId=${classId}`)
       .then(response => { 
        dispatch(() => {
          return {
            type: GET_ATTENDANCES,
            payload: response.data,
          };
        });
      })
  .catch(error=>console.log(error))}
  };


/* {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }); */