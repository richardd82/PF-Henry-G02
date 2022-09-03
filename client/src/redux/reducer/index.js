import { combineReducers } from 'redux';
import catalog from './catalogReducer.js';
import details from './detailReducer.js';

export default combineReducers({
  catalog, details,
});
