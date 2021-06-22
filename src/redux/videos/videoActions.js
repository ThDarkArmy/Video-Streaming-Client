import {POST_VIDEO, DELETE_VIDEO, UPDATE_VIDEO, GET_VIDEO, GET_ALL_VIDEOS, PLAY_VIDEO, LOAD_VIDEO, LOAD_ALL_VIDEOS} from './videoTypes';

// post a video to the server
export const postVideo = (video)=>{
    return {
        type: POST_VIDEO,
        payload: video
    }
}


// delete a video by id
export const deleteVideo = (videoId) => {
    return {
        type: DELETE_VIDEO,
        payload: {
            id: videoId
        }
    }
}


// update a video by id
export const updateVideo = (videoId, video) => {
    return {
        type: UPDATE_VIDEO,
        payload: {
            id: videoId,
            video: video
        }
    }
}


// get a specific video from server
export const getVideo = (videoId) => {
    return {
        type: GET_VIDEO,
        payload: {
            id: videoId
        }
    }
}

// load a video
export const loadVideo = (video)=>{
    return {
        type: LOAD_VIDEO,
        payload: {
            id: video
        }
    }
}

// get all videos from server
export const getAllVideos =  () => {
    return{
        type: GET_ALL_VIDEOS
    }    
}

// load all videos
export const loadAllVideos = (videos)=>{
        return{
            type: LOAD_ALL_VIDEOS,
            payload: {
                videos
            }
        }
}

// play an specific video
export const playVideo = (videoId) => {
    return {
        type: PLAY_VIDEO,
        payload: {
            id: videoId
        }
    }
}


