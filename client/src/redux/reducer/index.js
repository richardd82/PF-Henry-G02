import { combineReducers } from "redux";
import {
	modules,
	cohorts,
	classes,
	standUps,
	users,
	videos,
	extras,
} from "./reducer";
import catalog from './catalogReducer.js';
import searchBar from './searchBarReducer.js';
import details from './detailReducer.js';
import bootcamp from './bootcampReducer.js';
import teacher from './teacherReducer.js';
import attendance from './attendanceReducer.js';

export default combineReducers({
  catalog,
  bootcamp,
  details,
  searchBar,
  teacher,
  users,
  videos,
  attendance,
});
