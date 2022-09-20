import axios from 'axios';
import jwtDecode from "jwt-decode";
export const GET_ALL_LESSONS = 'GET_ALL_LESSONS';
export const GET_ALL_MODULES = 'GET_ALL_MODULES';
export const GET_LESSONS_BY_ID = "GET_LESSONS_BY_ID";
export const SET_PAGE_NUMBER = 'SET_PAGE_NUMBER';
export const REQUEST = 'GET_REQUEST'
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const GET_BY_NAME_SUCCESS = 'GET_BY_NAME_SUCCESS';
export const GET_ALL_CLASSES_SUCCESS = 'GET_ALL_CLASSES_SUCCESS';
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_STANDUPS = "GET_ALL_STANDUPS";
export const GET_ALL_COHORTS = "GET_ALL_COHORTS";
export const POST_NEW_COHORTS = "POST_NEW_COHORTS";
export const POST_NEW_CLASS = "POST_NEW_CLASS";
export const POST_NEW_STANDUPS = "POST_NEW_STANDUPS";
export const GET_TEACHERS = "GET_TEACHERS";
export const POST_NEW_USER = "POST_NEW_USER";
export const CREATE_VIDEO = "CREATE_VIDEO";
export const GET_VIDEOS = "GET_VIDEOS";
export const GET_VIDEOS_BY_NAME = "GET_VIDEOS_BY_NAME";
export const GET_VIDEOS_BY_TEACHER = "GET_VIDEOS_BY_TEACHER";
export const GET_VIDEOS_BY_ID = "GET_VIDEOS_BY_ID";
export const CLEAR_STATE_VIDEOS = "CLEAR_STATE_VIDEOS";
export const CLEAR_STATE_LESSONS = "CLEAR_STATE_LESSONS";
export const CLEAR_STATE_MODULES = "CLEAR_STATE_MODULES";
export const GET_BY_EMAIL = "GET_BY_EMAIL";
export const GET_FAVORITE_BY_ID = "GET_FAVORITE_BY_ID";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const ADD_REVIEW = "ADD_REVIEW";
export const GET_REVIEWS = "GET_REVIEWS";
export const REVIEWS_BY_STUDENT = "REVIEWS_BY_STUDENT";
export const CLEAR_STATE_REVIEWS = "CLEAR_STATE_REVIEWS";
export const USER_VALIDATE = "USER_VALIDATE";
export const LOGOUT = "LOGOUT";
export const UPLOAD_IMAGE = "UPLOAD_IMAGE"
// payments
export const REQUESTING = 'REQUESTING';
export const SEND_PAYMENT = 'SEND_PAYMENT';
export const GET_PAYMENT_BY_ID = 'GET_PAYMENT_BY_ID';
export const GET_PAYMENTS_BY_USER = 'GET_PAYMENTS_BY_USER';
export const CLEAR_PAYMENT_MSG = 'CLEAR_PAYMENT_MSG';
export const REQUEST_ERROR = 'REQUEST_ERROR';

//*************Modulos************
export function getAllModules() {
    return async function (dispatch) {
      try {
        var json = await axios.get('http://localhost:3001/modules');
        return dispatch({
          type: GET_ALL_MODULES,
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function clearStateModules() {
    return {
      type: CLEAR_STATE_MODULES,
    };
  }
//*****************Cohorts*************
export function getCohorts() {
    return async function (dispatch) {
      try {
        const response = await axios.get('http://localhost:3001/cohorts');
        return dispatch({
          type: GET_ALL_COHORTS,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function postNewCohort(payload) {
    return async function () {
      var json = await axios.post(
        `http://localhost:3001/cohorts/create`,
        payload
      );
      return json;
    };
  }
//****************Classes*****************
export function getAllLessons() {
    return async function (dispatch) {
      try {
        var json = await axios.get('http://localhost:3001/classes');
        return dispatch({
          type: GET_ALL_LESSONS,
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function getLessonsById(id) {
    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3001/classes/byId/${id}`);
      return dispatch({
        type: GET_LESSONS_BY_ID,
        payload: json.data,
      });
    };
  }
  export const setPageNumber = number => {
      return {
          type: SET_PAGE_NUMBER,
          payload: number,
      };
  };
  // Petición por nombre desde un query en SearchBar
export const getClassesByName = name => {
    return dispatch => {
      // Dispatch para cambiar el estado `loading` a `true`
      // más adelante útil para renderizar loaders
      dispatch(request());
      // Ahora sí, la petición por nombre
      // De tener éxito llenamos el estado con las clases
      // Si no, llenamos el estado `errorMsg` con el error
      // Más adelante se definen las otras acciones llamadas acá
      axios
        .get(`http://localhost:3001/classes/byName?name=${name}`)
        .then(response => dispatch(getByNameSuccess(response.data)))
        .catch(error => dispatch(requestFailure(error.response.data)));
    };
  };
  export const request = () => {
    return {
      type: REQUEST,
    };
  };
  export const getByNameSuccess = classes => {
    return {
      type: GET_BY_NAME_SUCCESS,
      payload: classes,
    };
  };
  
  export const requestFailure = errorMsg => {
    return {
      type: REQUEST_FAILURE,
      payload: errorMsg,
    };
  };
  export const getAllClassesSuccess = classes => {
    return {
      type: GET_ALL_CLASSES_SUCCESS,
      payload: classes,
    };
  };
  export function postNewClass(payload) {
    return async function () {
      var json = await axios.post(
        `http://localhost:3001/classes/create`,
        payload
      );
      return json;
    };
  }
  export function clearStateLessons() {
    return {
      type: CLEAR_STATE_LESSONS,
    };
  }
//******************Videos************************
export function createVideo(payload) {
    return async function (dispatch) {
      try {
        const response = await axios.post(
          'http://localhost:3001/videos/create',
          payload
        );
        return dispatch({
          type: CREATE_VIDEO,
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
        const response = await axios.get('http://localhost:3001/videos');
        console.log(response.data);
        return dispatch({
          type: GET_VIDEOS,
          payload: response.data,
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
          `http://localhost:3001/videos/byName?name=${name}`
        );
        return dispatch({
          type: GET_VIDEOS_BY_NAME,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function getVideosByTeacher(id) {
    return async function (dispatch) {
      try {
        const response = await axios.get(`http://localhost:3001/byTeacher/${id}`);
        return dispatch({
          type: GET_VIDEOS_BY_TEACHER,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function getVideosById(id) {
    return async function (dispatch) {
      var json = await axios.get(`http://localhost:3001/videos/byId/${id}`);
      console.log(json)
      return dispatch({
        type: GET_VIDEOS_BY_ID,
        payload: json.data,
      });
    };
  }
  export function clearStateVideos() {
    return {
      type: CLEAR_STATE_VIDEOS,
    };
  }
//************************User************************
export function getTeachers() {
    return async function (dispatch) {
      try {
        const response = await axios.get('http://localhost:3001/users/teachers');
        console.log(response.data);
        return dispatch({
          type: GET_TEACHERS,
          payload: response.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function getTodosUsuarios() {
    return async function (dispatch) {
      try {
        var json = await axios.get("http://localhost:3001/users");
        return dispatch({
          type: GET_ALL_USERS,
          payload: json.data,
        });
      } catch (error) {
        console.log(error);
      }
    };
  }
  export function postNewUser(payload) {
    return async function () {
      var json = await axios.post(`http://localhost:3001/users/create`, payload);
      return json;
    };
  }

  export function putUser(id,payload) {
      return async function () {
        var json = await axios.put(`http://localhost:3002/users/update/${id}`, payload);
        return json;
      };
    }

  export function searchByEmail(email){
    return async function(dispatch){
      var json = await axios.get(`http://localhost:3002/users/byEmail?email=${email}`);
      return dispatch({
        type: GET_BY_EMAIL,
        payload: json.data,
      });
    }
  }

  export async function usersValidate(payload) {
    return async function (dispatch) {
      console.log(payload.email + " <-------------->Entre a la Action");
      var json = await axios.post(`http://localhost:3001/users/`, payload);
      localStorage.setItem("token", JSON.stringify(json.data));
      const data = await jwtDecode(json.data);
		  window.location.reload('http://localhost:3000/');
      console.log(data, "Esto es DATA")
      return dispatch({
        type: USER_VALIDATE,
        payload: data,
      });
    };
  }
//*********************Stand Ups**************************
export function getAllStandUps() {
    return async function (dispatch) {
      try {
        var json = await axios.get("http://localhost:3001/standups");
        return dispatch({
          type: GET_ALL_STANDUPS,
          payload: json.data,
        });
      } catch (error) {
        // console.log(error);
      }
    };
  }
  export function postNewStandUp(payload) {
    return async function () {
        try {
        var json = await axios.post(
          `http://localhost:3001/standups/create`,
          payload
        );
        return json;
      } catch (error) {
      console.log(error);
    }
  }
}
  //*********************Attendance**************************
  export const postAttendance = attendance => {
    return () => {
      axios
        .post('http://localhost:3001/attendance/create', attendance)
        .then(response => console.log(response.data))
        .catch(error => console.log(error));
    };
  };
//*********************Favoritos**************************
export function getFavoritesById(id) {
  return async function (dispatch) {
  try {
      var json = await axios.get(`http://localhost:3002/favorites/${id}`);
      // console.log(json)
      return dispatch({
        type: GET_FAVORITE_BY_ID,
        payload: json.data.videos,
      });
  
  } catch (error) {
    // console.log(error);
  }
}
}

export function addFavoritesById(userId, videoId) {
  return async function (dispatch) {
    try {
    var json = await axios.post( `http://localhost:3002/favorites/create/${userId}/${videoId}`);
    // console.log(json.data)
    return dispatch({
      type: ADD_FAVORITE,
      payload: json.data,
    });
    } catch (error) {
      console.log(error);
    }
  }
}
//*********************Reviews**************************
export function addReview (user, payload){
  return async (dispatch) => {
    try {
    var response = await axios.post(`http://localhost:3001/reviews/create/${user}`, payload)
    return dispatch({
      type: ADD_REVIEW, 
      payload: response.data
    })
  } catch (error) {
  console.log(error);
    }
  }
}

export function getReviews (taId){
  return async (dispatch) => {
    try {
      var response = await axios.get(`http://localhost:3001/reviews/?taId=${taId}`)
      return dispatch({
        type: GET_REVIEWS, 
        payload: response.data
      })

    } catch (error) {
    console.log(error);
    }
  }
}

  export function getReviewsByStudent (userId){
    return async (dispatch) => {
      try {
        var response = await axios.get(`http://localhost:3001/reviews/reviewByStudent?userId=${userId}`)
        return dispatch({
          type: REVIEWS_BY_STUDENT, 
          payload: response.data
        })
    
      } catch (error) {
      // console.log(error);
      }
    }
  }

    export function clearStateReviews() {
      return {
        type: CLEAR_STATE_REVIEWS,
      };
    }

//*********************Cloudinary**************************

export async function uploadImage(base64EncodedImage, userId){
      console.log(base64EncodedImage)
      try {
        return async (dispatch) => {

          const res = await axios.post('http://localhost:3001/cloudinary/upload', { data: base64EncodedImage, id: userId })

          console.log(res, "Esto es res23 156+4156+46+46+e5n el")

          localStorage.setItem("profileImage", res.data.url)
          window.location.reload('http://localhost:3000/');

          return dispatch({
            type: UPLOAD_IMAGE,
            payload: base64EncodedImage,
          })
}
      } catch (err) {
          console.error(err);
      }
  };
//**************Payments***************
export const sendPayment = (stripeId, amount, userId) => {
  return async dispatch => {
    dispatch(requesting());
    try {
      const { data } = await axios.post('http://localhost:3001/checkout', {
        stripeId,
        amount,
        userId,
      });
      return dispatch(sendPaymentSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(sendPaymentFailure(error))
    }
  };
};

export const requesting = () => {
  return {
    type: REQUESTING,
  };
};

export const sendPaymentSuccess = data => {
  return {
    type: SEND_PAYMENT,
    payload: data,
  };
};

export const sendPaymentFailure = message => {
  return {
    type: REQUEST_ERROR,
    payload: message,
  };
};

export const getPayments = userId => {
  return async dispatch => {
    dispatch(requesting());
    try {
      const { data } = await axios.get(
        `http://localhost:3001/checkout/payments/${userId}`
      );
      return dispatch(getPaymentsSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPaymentsSuccess = data => {
  return {
    type: GET_PAYMENTS_BY_USER,
    payload: data,
  };
};

export const getPaymentById = paymentId => {
  return async dispatch => {
    dispatch(requesting());
    try {
      const { data } = await axios.get(
        `http://localhost:3001/checkout/${paymentId}`
      );
      return dispatch(getPaymentByIdSuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPaymentByIdSuccess = data => {
  return {
    type: GET_PAYMENT_BY_ID,
    payload: data,
  };
};

export const clearPaymentMsg = () => {
  return {
    type: CLEAR_PAYMENT_MSG,
  };
};
