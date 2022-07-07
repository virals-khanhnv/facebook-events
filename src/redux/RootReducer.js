import { combineReducers } from "redux";
import facebookReducer from "./Reducer";

const rootReducer = combineReducers({
    data: facebookReducer,
})

export default rootReducer;