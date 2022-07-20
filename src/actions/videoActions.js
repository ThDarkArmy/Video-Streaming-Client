import axios from 'axios'
import { Video } from "../constants";

const BASE_URL = "http://localhost:5678/videos/all"

const { FETCH_ALL_VIDEOS, FETCH_ALL_VIDEOS_SUCCESS, FETCH_ALL_VIDEOS_FAILURE  } = Video;


export const fetchAllVideos = () => async (dispatch, getState) => {
  dispatch({type: FETCH_ALL_VIDEOS})

  try{
    const response = await axios.get(BASE_URL)
    if(response.data.success){
      
      dispatch({type: FETCH_ALL_VIDEOS_SUCCESS, payload: response.data.body})
    }else{
      throw response.data.error
    }

  }catch(err){
    dispatch({type: FETCH_ALL_VIDEOS_FAILURE, error: err})
  }
}


// get all videos
export const getAllVideos = () => {
  return {
    type: Video.GET_ALL,
  };
};

// get a video by id
export const getVideoById = (videoId) => {
  return {
    type: Video.GET_BY_ID,
    payload: {
      id: videoId
    }
  }
}

// post a video
export const postVideo = (video) => {
  return {
    type: Video.POST,
    payload: video
  };
};


// export const video description
export const postVideoDescription = (description) => {
  return {
    type: Video.POST_DESCRIPTION,
    payload: description
  }
}


// update a video by id
export const updateVideo = (videoId, video) => {
  return {
    type: Video.UPDATE,
    payload: {
      id: videoId,
      video: video
    }
  };
};


// update thumbnail of a video
export const updateThumbnail = (videoId, thumbnail) => {
  return {
    type: Video.UPDATE_THUMBNAIL,
    payload: {
      id: videoId,
      thumbnail: thumbnail
    }
  }
}


// delete a video by id
export const deleteVideo = (videoId) => {
  return {
    type: Video.DELETE,
    payload: {
      id: videoId
    }
  };
};

