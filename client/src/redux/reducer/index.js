import { combineReducers } from 'redux';
// import catalog from './catalogReducer.js';
// import searchBar from './searchBarReducer.js';
// import details from './detailReducer.js';
// import bootcamp from './bootcampReducer.js';
import classes from './classesReducer.js';
import modules from './modulesReducer.js';

export default combineReducers({
  classes,
  modules,
});
