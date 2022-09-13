const initialState = {
  modules: [],
};

export default function modules(state = initialState, action) {
  switch (action.type) {
   
    case "GET_ALL_MODULES":
      return {
        ...state,
        modules: action.payload,
      };
    case 'CLEAR_STATE_MODULES':
      return {
        ...initialState,
      }
    default:
      return state;
  }
}