import axios from "axios";

const GET_ALL_USERS = "GET_ALL_USERS";

export function getUsers() {
  return async function (dispatch) {
    try {
      var json = await axios.get("http://localhost:3001/users");
      return dispatch({
        type: GET_ALL_USERS,
        payload: json.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
