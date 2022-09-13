import {
	GET_ALL_LESSONS,
	GET_ALL_MODULES,
	GET_LESSONS_BY_ID,
	SET_PAGE_NUMBER,
	REQUEST,
	REQUEST_FAILURE,
	GET_BY_NAME_SUCCESS,
	GET_ALL_CLASSES_SUCCESS,
	GET_ALL_USERS,
	GET_ALL_STANDUPS,
	GET_ALL_COHORTS,
	POST_NEW_COHORTS,
	POST_NEW_CLASS,
	POST_NEW_STANDUPS,
	GET_TEACHERS,
	POST_NEW_USER,
	CREATE_VIDEO,
	GET_VIDEOS,
	GET_VIDEOS_BY_NAME,
	GET_VIDEOS_BY_TEACHER,
	GET_VIDEOS_BY_ID,
	CLEAR_STATE_VIDEOS,
	CLEAR_STATE_LESSONS,
	CLEAR_STATE_MODULES,
	USER_VALIDATE,
	LOGOUT,
} from "../actions/index";

const initialState = {
	//Moules
	modules: [],

	//Cohorts
	cohorts: [],
	allCohorts: [],

	//Classes
	classes: [],
	lessons: [],
	allClasses: [],
	detalle: [{}],
	description: [],

	//StandUps
	standUp: [],
	allStandUp: [],

	//Users
	users: [],
	teachers: [],
	allUsers: [],
	userValidate: {},

	//Videos
	videos: [],
	allVideos: [],
	detailVideos: {},	

	//Extras
	loading: false,
	errorMsg: "",
	///////////////////////////////
};
export function modules(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_MODULES:
			return {
				...state,
				modules: action.payload,
			};
		case CLEAR_STATE_MODULES:
			return {
				...initialState,
			};
		default:
			return state;
	}
}
export function cohorts(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_COHORTS:
			return {
				...state,
				cohorts: action.payload,
				allCohorts: action.payload,
			};

		case POST_NEW_COHORTS:
			return {
				...state,
			};

		default:
			return { ...state };
	}
}
export function classes(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_LESSONS:
			return {
				...state,
				lessons: action.payload,
			};
		case GET_LESSONS_BY_ID:
			return {
				...state,
				detalle: [{ ...action.payload }],
			};
		case GET_BY_NAME_SUCCESS:
			return {
				...state,
				loading: false,
				classes: action.payload,
			};
		case GET_ALL_CLASSES_SUCCESS:
			return {
				...state,
				loading: false,
				classes: action.payload,
			};
		case POST_NEW_CLASS:
			return {
				...state,
			};
		case CLEAR_STATE_LESSONS:
			return {
				...initialState,
			};
		default:
			return state;
	}
}
export function standUps(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_STANDUPS:
			return {
				...state,
				standUp: action.payload,
				allStandUp: action.payload,
			};
		case POST_NEW_STANDUPS:
			return {
				...state,
			};
		default:
			return { ...state };
	}
}
export function users(state = initialState, action) {
	switch (action.type) {
		case GET_ALL_USERS:
			return {
				...state,
				users: action.payload,
				allUsers: action.payload, // En este state me guarda todas los usuarios y nunca las modifico.
			};
		case GET_TEACHERS:
			return {
				...state,
				teachers: action.payload,
			};
		case POST_NEW_USER:
			return {
				...state,
			};
		case USER_VALIDATE:
			// console.log(state + ' _________________ SOY REDUCER ')
			return {
				...state,
				userValidate: action.payload,
			};
		case LOGOUT:
			return{
				...state,
				userValidate: action.payload,
			}

		default:
			return { ...state };
	}
}

export function videos(state = initialState, action) {
	switch (action.type) {
		case CREATE_VIDEO:
			return {
				...state,
				videos: [...state.videos, action.payload],
			};
		case GET_VIDEOS:
			console.log(state + " ********************");
			return {
				...state,
				videos: action.payload,
				allVideos: action.payload,
			};
		case GET_VIDEOS_BY_NAME:
			return {
				...state,
				videos: action.payload,
			};
		case GET_VIDEOS_BY_TEACHER:
			return {
				...state,
				videos: action.payload,
			};
		case GET_VIDEOS_BY_ID:			
			return {
				...state,
				detailVideos: action.payload,
			};			
		case CLEAR_STATE_VIDEOS:
			return {
				...state,
			};
		case SET_PAGE_NUMBER:
			return {
				...state,
				currentPage: action.payload,
			};

		default:
			return state;
	}
}
export function extras(state = initialState, action) {
	switch (action.type) {
		case REQUEST:
			return {
				...state,
				loading: true,
			};
		case REQUEST_FAILURE:
			return {
				...state,
				loading: false,
				errorMsg: action.payload,
			};
		default:
			return { ...state };
	}
}

// export default {
// 	modules,
// 	cohorts,
// 	classes,
// 	standUps,
// 	users,
// 	videos,
// 	extras,
// };
