import { combineReducers } from 'redux';
import catalog from './catalogReducer.js';
import searchBar from './searchBarReducer.js';
import details from './detailReducer.js';
import bootcamp from './bootcampReducer.js';
import teacher from './teacherReducer.js';
import videos from './videoReducer.js';
import users from './userAdmin';

export default combineReducers({
  catalog,
  bootcamp,
  details,
  searchBar,
  teacher,
  users,
  videos,
});
