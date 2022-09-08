const initialState = {
  classes: [],
  modules: [],
  cohorts: [],
  teachers: []
};

export default function teacher(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_CLASS':
      return {
        ...state,
        classes: [...state.classes, action.payload],
      };
    case 'GET_MODULES':
      return {
        ...state,
        modules: action.payload,
      };
    case 'GET_COHORTS':
      return {
        ...state,
        cohorts: action.payload,
      };
      case 'GET_TEACHERS': 
      return {
        ...state, 
        teachers: action.payload
      }
    default:
      return { ...state };
  }
}
