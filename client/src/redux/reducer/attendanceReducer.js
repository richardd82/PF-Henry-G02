import {
  FETCHING,
  GET_ALL_USERS,
  GET_ALL_MODULES,
  GET_ALL_COHORTS,
  GET_ALL_STANDUPS,
  GET_ALL_LECTURES,
  GET_ATTENDANCES,

} from '../actions/attendanceActions.js';

const initialState = {
  fetching: false,
  users: [],
  cohorts: [],
  modules: [],
  standups: [],
  lectures: [],
  attendances: []
};

export default function attendance(state = initialState, action) {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        fetching: true,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        fetching: false,
        users: action.payload,
      };
    case GET_ALL_COHORTS:
      return {
        ...state,
        fetching: false,
        cohorts: action.payload,
      };
    case GET_ALL_MODULES:
      return {
        ...state,
        fetching: false,
        modules: action.payload,
      };
    case GET_ALL_STANDUPS:
      return {
        ...state,
        fetching: false,
        standups: action.payload,
      };
    case GET_ALL_LECTURES:
      return {
        ...state,
        fetching: false,
        lectures: action.payload,
      };
    case GET_ATTENDANCES:
      return {
        ...state,
        fetching: false,
        attendances: action.payload
      }
      
    default:
      return {
        ...state,
      };
  }
}
