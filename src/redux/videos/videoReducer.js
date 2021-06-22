import {POST_VIDEO, DELETE_VIDEO, UPDATE_VIDEO, GET_VIDEO, GET_ALL_VIDEOS, PLAY_VIDEO, LOAD_ALL_VIDEOS} from './videoTypes';

const INITIAL_STATE = {
    videos:[]
}

const videoReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case POST_VIDEO: 
            return {...state}
        case DELETE_VIDEO: 
            return {...state}
        case UPDATE_VIDEO:
            return {...state}
        case GET_VIDEO:
            return {}
        case "GET_ALL_VIDEOS_SUCCEEDED":
            console.log(action.payload)
            return action.payload
            
        case LOAD_ALL_VIDEOS: 
            return {
                ...state,
                videos: [...state.videos, action.payload.videos]
            }
        case PLAY_VIDEO:
            return {}
        default:
            return state
    }
}

export default videoReducer;