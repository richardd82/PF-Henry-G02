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
      .get('https://localhost:3001/users')
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
      .get('https://localhost:3001/cohorts')
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
      .get('https://localhost:3001/modules')
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
      .get('https://localhost:3001/standups')
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
    axios.get('https://localhost:3001/classes').then(response => {
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
      .post('https://localhost:3001/attendance/create', attendance)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  };
};

export const getAttendances = attendance => {
  return dispatch => {
    axios
      .get('https://localhost:3001/attendance', attendance)
      .then(response => {
        dispatch(() => {
          return {
            type: GET_ATTENDANCES,
            payload: response.data,
          };
        });
      });
  };
};
