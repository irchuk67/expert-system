import {combineReducers} from "redux";
import {reducer as formReducer} from "redux-form";
import DecisionReducer from "./DecisionReducer";

export default combineReducers({
    form: formReducer,
    decision: DecisionReducer
})