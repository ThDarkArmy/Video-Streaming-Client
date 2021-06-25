import { combineReducers } from "redux";
import videoReducers from './videoReducers';
import authReducers from './authReducers';


export default combineReducers({
  videoReducers,
  authReducers
})


