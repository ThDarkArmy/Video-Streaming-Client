import {POST_VIDEO, DELETE_VIDEO, UPDATE_VIDEO, GET_VIDEO, GET_ALL_VIDEOS, PLAY_VIDEO} from './videoTypes';

const INITIAL_STATE = {
    videos:[
        {
            "views": 0,
            "_id": "60a7d4a23a493b769038a30f",
            "title": "Dancing Plane",
            "description": "Just for entertainment",
            "category": "Meme",
            "createdAt": "2021-05-21T15:41:22.771Z",
            "updatedAt": "2021-05-21T15:41:31.728Z",
            "duration": 31,
            "mimeType": "video/mp4",
            "path": "./bank.mp4",
            "size": 4.96
        },
        {
            "views": 0,
            "_id": "60aba24089f3585d242c7812",
            "title": "The bank job",
            "description": "Just for entertainment",
            "category": "Movie",
            "createdAt": "2021-05-24T12:55:28.161Z",
            "updatedAt": "2021-05-24T12:55:47.196Z",
            "duration": 6721.756708,
            "mimeType": "video/mp4",
            "path": "videos\\The.Bank.Job.2008.1080p.BluRay.x264.YIFY.mp4",
            "size": 1644.12
        }
    ]
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
        case GET_ALL_VIDEOS:
            return {}
        case PLAY_VIDEO:
            return {}
        default:
            return state
    }
}

export default videoReducer;