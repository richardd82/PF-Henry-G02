const initialState = {
  users: [],
  allUsers: [],
  cohorts: [],
  allCohorts: [],
  standUp: [],
  allStandUp: [],
  classes: [],
  allClasses: [],
};

export default function usuarios(state = initialState, action) {
  switch (action.type) {
    ///REDUCER USERS
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
    ///REDUCER COHORTS
    case "GET_ALL_COHORTS":
      return {
        ...state,
        cohorts: action.payload,
        allCohorts: action.payload,
      };
    case "POST_NEW_COHORTS":
      return {
        ...state,
      };

    ///REDUCER STANDUPS
    case "GET_ALL_STANDUPS":
      return {
        ...state,
        standUp: action.payload,
        allStandUp: action.payload,
      };
    case "POST_NEW_STANDUPS":
      return {
        ...state,
      };

    ///REDUCER CLASSES
    case "GET_ALL_CLASSES":
      return {
        ...state,
        classes: action.payload,
        allClasses: action.payload,
      };
    case "POST_NEW_CLASS":
      return {
        ...state,
      };
    default:
      return state;
  }
}
