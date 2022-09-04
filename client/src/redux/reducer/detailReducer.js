const initialState = {
  classes: [],
  allClasses: [],
  detalle: [{}],
  description:[],
};

export default function details(state = initialState, action) {
  switch (action.type) {
    case "GET_LESSONS":
      return {
        ...state,
        classes: action.payload,
        allClasses: action.payload, // En este state me guarda todas las clases y nunca las modifico.
      };
    case "GET_LESSONS_BY_ID":
      return {
        ...state,
        detalle: [{ ...action.payload }],
      };
    case "CLEAR_STATE":
      return {
        ...initialState,
      };
    default:
      return state;
  }
}
