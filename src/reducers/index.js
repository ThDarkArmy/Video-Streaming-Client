import { combineReducers } from "redux";
import videoReducers from './videoReducers';
import authReducers from './authReducers';
import streamingVideoReducer from "./streamingVideoReducer"


export default combineReducers({
  videoReducer: videoReducers,
  streamingVideoReducer: streamingVideoReducer,
  authReducer: authReducers
})


