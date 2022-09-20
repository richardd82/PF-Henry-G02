import { combineReducers } from 'redux';
import {
  modules,
  cohorts,
  classes,
  standUps,
  users,
  videos,
  extras,
  favorites,
  reviews,
  payments
} from './reducer';
import attendance from './attendanceReducer.js';

export default combineReducers({
  modules,
  cohorts,
  classes,
  standUps,
  users,
  videos,
  extras,
  favorites,
  attendance,
  reviews,
  payments
});
