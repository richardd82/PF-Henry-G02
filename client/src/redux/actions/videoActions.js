import axios from 'axios';

export function createVideo(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(
        'http://localhost:3002/videos/create',
        payload
      );
      return dispatch({
        type: 'CREATE_VIDEO',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getAllVideos() {
  return async function (dispatch) {
    try {
      const response = await axios.get('http://localhost:3002/videos');
      return dispatch({
        type: 'GET_VIDEOS',
        payload: response.payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getVideosByName(name) {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3002/videos/byName?name=${name}`
      );
      return dispatch({
        type: 'GET_VIDEOS_BY_NAME',
        payload: response.payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getVideosByTeacher(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`https://localhost:3001/byTeacher/${id}`);
      return dispatch({
        type: 'GET_VIDEOS_BY_TEACHER',
        payload: response.payload,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getVideosById(id) {
  return async function (dispatch) {
    var json = await axios.get(`https://localhost:3001/videos/byId/${id}`);
    console.log(json)
    return dispatch({
      type: 'GET_VIDEOS_BY_ID',
      payload: json.data,
    });
  };
}
export function clearState() {
  return {
    type: "CLEAR_STATE",
  };
}
