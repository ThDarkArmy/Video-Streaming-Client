import { combineReducers } from "redux";
import { VideoStreaming } from "../constants";

const initialState = {
    video: null,
    loading: true,
    error: null
}

const video = (state=initialState, action)=>{
    switch(action.type){
        case VideoStreaming.STREAM:
            return { ...state, video: action.payload, loading: false}
        case VideoStreaming.ERROR:
            return { ...state, error: action.payload}
        default:
            return {...state}
    }
}


export default combineReducers({
    video,
})