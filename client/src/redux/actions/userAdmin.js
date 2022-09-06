import axios from "axios";

const GET_ALL_USERS = "GET_ALL_USERS";

export function getTodosUsuarios() {
  return async function (dispatch) {
    try {
      var json = await axios.get('http://localhost:3002/users');
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
  
}
export function postNewUser(payload) {
  return async function () {
    var json = await axios.post(`http://localhost:3002/users/create`, payload);
    return json;
  };
}