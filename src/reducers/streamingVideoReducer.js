import { combineReducers } from "redux";
import { VideoStreaming } from "../constants";

const {STREAM_VIDEO_REQUEST, STREAM_VIDEO_SUCCESS, STREAM_VIDEO_ERROR } = VideoStreaming

const initialState = {
    video: null,
    loading: true,
    error: null
}



const streamingVideoReducer = (state=initialState, action)=>{
    switch(action.type){
        case STREAM_VIDEO_REQUEST:
            return { ...state, loading: true}
        case STREAM_VIDEO_SUCCESS:
            return { ...state, video: action.payload, loading: false}
        case STREAM_VIDEO_ERROR:
                return { ...state, error: action.error, loading:false}
        default:
            return {...state}
    }
}


export default streamingVideoReducer;