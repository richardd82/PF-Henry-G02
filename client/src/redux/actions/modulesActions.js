import axios from 'axios';

export const GET_ALL_MODULES = 'GET_ALL_MODULES';
export const CLEAR_STATE_MODULES = 'CLEAR_STATE_MODULES';

export function getAllModules() {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3002/modules');
      return dispatch({
        type: GET_ALL_MODULES,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearStateModules() {
  return {
    type: CLEAR_STATE_MODULES,
  };
}