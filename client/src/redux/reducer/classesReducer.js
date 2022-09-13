const initialState = {
  classes: [],
  allClasses: [],
  detalle: [{}],
  description:[],
  loading: false,
};

export default function classes(state = initialState, action) {
  switch (action.type) {
    case 'REQUEST':
      return {
        ...state,
        loading: true,
      }
    case "GET_CLASSES":
      return {
        ...state,
        classes: action.payload,
        allClasses: action.payload, // En este state me guarda todas las clases y nunca las modifico.
        loading: false,
      };
    case "GET_CLASSES_BY_ID":
      return {
        ...state,
        detalle: [{ ...action.payload }],
        loading: false,
      };
    case "GET_CLASSES_BY_NAME":
      return {
        ...state,
        classes: action.payload,
        loading: false,
      }
    case "CREATE_CLASS":
      return {
        ...state,
        classes: [...state.classes, action.payload],
        loading: false,
      }
    case "CLEAR_STATE_CLASSES":
      return {
        ...initialState,
      };
    default:
      return {...state};
  }
}
