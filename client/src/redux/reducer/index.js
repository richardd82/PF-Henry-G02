import { combineReducers } from 'redux';
import {
  modules,
  cohorts,
  classes,
  standUps,
  users,
  videos,
  extras,
	favorites
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
  attendance,
});
