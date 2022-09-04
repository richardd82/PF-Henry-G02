const initialState = {
  lessons: [],
  modules: [],
};

export default function bootcamp(state = initialState, action) {
  switch (action.type) {
    case "GET_ALL_LESSONS":
      return {
        ...state,
        lessons: action.payload,
      };
    case "GET_ALL_MODULES":
      return {
        ...state,
        modules: action.payload,
      };
    case 'CLEAR_STATE':
      return {
        ...initialState,
      }
    default:
      return state;
  }
}
