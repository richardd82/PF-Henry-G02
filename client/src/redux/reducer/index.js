import { combineReducers } from 'redux';
import catalog from './catalogReducer.js';
import searchBar from './searchBarReducer.js';
import details from './detailReducer.js';
import bootcamp from './bootcampReducer.js';

export default combineReducers({
  catalog,
  bootcamp,
  details,
  searchBar,
});
