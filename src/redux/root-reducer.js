/*root reducer represents the overall reducer, hence need
  combineReducers to combine them together
*/

import { combineReducers } from "redux";

import userReducer from "./user/user.reducer";

export default combineReducers({
  /*
  currentuser value that will get set whenever the set current user action fires
  pulling into combined reducer which will return into one giant object
  */
  user: userReducer
});
