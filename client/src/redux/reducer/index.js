import { combineReducers } from 'redux';
import catalog from './catalogReducer.js';
import searchBar from './searchBarReducer.js';

export default combineReducers({
  catalog,
  searchBar,
});
