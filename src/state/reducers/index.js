// Here we combine all the reducers (if availabe otherwise single also) and combine all of them in one (as in key: value form)
import { combineReducers } from "redux"; // combineReducer from redux is used for combining all the reducers
import amountReducer from "./amountReducer";  // this app single reducer is there.

const reducers = combineReducers({
    amount: amountReducer
});

export default reducers;