import { combineReducers } from "redux";
import * as Actions from "../actions/videoActions";

const videos = (state = [], action) => {
  switch (action.type) {
    case Actions.POST_VIDEO:
      return { ...state };
    case Actions.DELETE_VIDEO:
      return { ...state };
    case Actions.UPDATE_VIDEO:
      return { ...state };
    case Actions.GET_VIDEO:
      return {};
    case Actions.GET_ALL_VIDEOS_SUCCEEDED:
      return action.payload;
    case Actions.LOAD_ALL_VIDEOS:
      return {
        ...state,
        videos: [...state.videos, action.payload.videos]
      };
    case Actions.PLAY_VIDEO:
      return {};
    default:
      return state;
  }
};

export default combineReducers({
  videos
});
