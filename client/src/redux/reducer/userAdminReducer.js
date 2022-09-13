const initialState = {
  users: [],
  allUsers: [],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_USERS":
      return {
        ...state,
        users: action.payload,
        allUsers: action.payload, // En este state me guarda todas los usuarios y nunca las modifico.
      };
  }
}
