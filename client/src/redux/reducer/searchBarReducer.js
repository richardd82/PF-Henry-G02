import {
  REQUEST,
  REQUEST_FAILURE,
  GET_BY_NAME_SUCCESS,
  GET_ALL_CLASSES_SUCCESS,
} from '../actions/searchBarActions.js';

const initialState = {
  loading: false,
  errorMsg: '',
  classes: [],
};

export default function searchBar(state = initialState, action) {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        errorMsg: action.payload,
      }
    case GET_BY_NAME_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload,
      }
    case GET_ALL_CLASSES_SUCCESS:
      return {
        ...state,
        loading: false,
        classes: action.payload,
      }
    default:
      return { ...state };
  }
}
