import { VideoStreaming } from "../constants";
import axios from 'axios'

const {STREAM_VIDEO_REQUEST, STREAM_VIDEO_SUCCESS, STREAM_VIDEO_ERROR } = VideoStreaming


const BASE_URL = "http://localhost:5678/"


// get a video
export const getVideo = id => {
    return {
        type: VideoStreaming.GET,
        payload: {
            id: id
        }
    }
}

export const streamVideo = (id) => async (dispatch, getState)=> {
    dispatch({type: STREAM_VIDEO_REQUEST})
    try{
        const response = await axios.get(BASE_URL+"videos/byId/"+id)
        if(response.data.success){
            dispatch({type: STREAM_VIDEO_SUCCESS, payload: response.data.body})
        }else{
            throw response.data.error
        }

        
    }catch(err){
        dispatch({type: STREAM_VIDEO_ERROR, error: err})
    }
}