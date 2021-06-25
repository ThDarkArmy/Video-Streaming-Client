export const POST_VIDEO = "POST_VIDEO";
export const UPDATE_VIDEO = "UPDATE_VIDEO";
export const DELETE_VIDEO = "DELETE_VIDEO";
export const GET_VIDEO = "GET_VIDEO";
export const GET_ALL_VIDEOS = "GET_ALL_VIDEOS";
export const GET_ALL_VIDEOS_SUCCEEDED = "GET_ALL_VIDEOS_SUCCEEDED";
export const PLAY_VIDEO = "PLAY_VIDEO";
export const LOAD_ALL_VIDEOS = "LOAD_ALL_VIDEOS";
export const LOAD_VIDEO = "LOAD_VIDEO";

export const postVideo = (video) => {
  return {
    type: POST_VIDEO,
    payload: video
  };
};

export const getAllVideos = () => {
  return {
    type: GET_ALL_VIDEOS,
  };
};

// delete a video by id
export const deleteVideo = (videoId) => {
  return {
    type: DELETE_VIDEO,
    payload: {
      id: videoId
    }
  };
};

// update a video by id
export const updateVideo = (videoId, video) => {
  return {
    type: UPDATE_VIDEO,
    payload: {
      id: videoId,
      video: video
    }
  };
};
