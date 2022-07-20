import { combineReducers } from "redux";
import { Video } from "../constants";

const initialState = {
  loading: false,
  videos: [],
  error: null
}


const { FETCH_ALL_VIDEOS, FETCH_ALL_VIDEOS_SUCCESS, FETCH_ALL_VIDEOS_FAILURE } = Video;

const fetchAllVideosReducer = (state=initialState, action) => {
  switch(action.type){
      case FETCH_ALL_VIDEOS:
        return { ...state, loading: true}
      case FETCH_ALL_VIDEOS_SUCCESS: 
        return { ...state, videos: action.payload, loading: false}
      case FETCH_ALL_VIDEOS_FAILURE:
        return { ...state, error: action.error, loading: false}
      default :
        return state
  }
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
  videos, fetchAllVideosReducer
});
