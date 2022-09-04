import { combineReducers } from 'redux';
import catalog from './catalogReducer.js';
import bootcamp from "./bootcampReducer.js"

export default combineReducers({
  catalog, bootcamp,
});
