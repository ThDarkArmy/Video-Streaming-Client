import { combineReducers } from "redux";
import { Video } from "../constants";

const initialState = {
  loading: false,
  videos: [],
  error: null
}

const videos = (state = initialState, action) => {
  switch (action.type) {
    case Video.GET_ALL: 
      return { ...state, loading: true}
    case Video.LOAD_ALL:
      return {...state, videos: action.payload, loading:false}
      
    case Video.LOAD_BY_ID:
      return {...state}

    case Video.POST:
      return { ...state };

    case Video.POST_DESCRIPTION:
      return {...state,};

    case Video.UPDATE: 
      return {...state};

    case Video.UPDATE_THUMBNAIL:
      return {...state};

    case Video.DELETE:
      return { ...state };

    default:
      return state;
  }
};

export default combineReducers({
  videos
});
