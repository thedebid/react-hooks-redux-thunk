import { combineReducers } from "redux";
import userReducer from "./users.red";

const rootReducer = combineReducers({
  users: userReducer,
});

export default rootReducer;
