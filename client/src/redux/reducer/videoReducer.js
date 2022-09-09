const initialState = {
  videos: [],
  allVideos: [],
  detailVideos:[{}]
};

export default function videos(state = initialState, action) {
  switch (action.type) {
    case 'CREATE_VIDEO':
      return {
        ...state,
        videos: [...state.videos, action.payload],
      };
    case 'GET_VIDEOS':
      return {
        ...state,
        videos: action.payload,
        allVideos: action.payload
      };
    case 'GET_VIDEOS_BY_NAME':
      return {
        ...state,
        videos: action.payload,
      };
    case 'GET_VIDEOS_BY_TEACHER':
      return {
        ...state,
        videos: action.payload,
      };
    case 'GET_VIDEOS_BY_ID':
      console.log(state.detailVideos + '=====================>')
      return {
        ...state,
        detailVideos: [{...action.payload}],
      };
    case 'CLEAR_STATE':
      return {
        ...state,
      };
    default:
      return { ...state };
  }
}
