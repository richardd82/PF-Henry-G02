const initialState = {
  users: [],
  allUsers: [],
};

export default function usuarios(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload, // En este state me guarda todas los usuarios y nunca las modifico.
      };
      case "POST_NEW_USER":
        return {
          ...state,
        };
    default:
      return state;
  }
}
