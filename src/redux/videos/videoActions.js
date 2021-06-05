import {POST_VIDEO, DELETE_VIDEO, UPDATE_VIDEO, GET_VIDEO, GET_ALL_VIDEOS, PLAY_VIDEO} from './videoTypes';

export default postVideo = (video)=>{
    return {
        action: POST_VIDEO,
        payload: video
    }
}

export default deleteVideo = (videoId) => {
    return {
        action: DELETE_VIDEO,
        payload: {
            id: videoId
        }
    }
}

export default updateVideo = (videoId, video) => {
    return {
        action: UPDATE_VIDEO,
        payload: {
            id: videoId,
            video: video
        }
    }
}

export default getVideo = (videoId) => {
    return {
        action: GET_VIDEO,
        payload: {
            id: videoId
        }
    }
}

export default getAllVideos = () => {
    return {
        action: GET_ALL_VIDEOS
    }
}

export default playVideo = (videoId) => {
    return {
        action: PLAY_VIDEO,
        payload: {
            id: videoId
        }
    }
}


