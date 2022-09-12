import { combineReducers } from "redux";
import {
	modules,
	cohorts,
	classes,
	standUps,
	users,
	videos,
	extras,
	favorites,
} from "./reducer";

export default combineReducers({

	modules,
	cohorts,
	classes,
	standUps,
	users,
	videos,
	extras,
	favorites,

});
