import { call, put, takeLatest } from "@redux-saga/core/effects";
import {Video} from '../constants'
import VideoService from "../services/videoServices";

function* handleGetAllVideos() {
  try {
    const data = yield call(VideoService.requestGetAllVideos);
    yield put({
      type: Video.LOAD_ALL,
      payload: data.videos
    });
  } catch (err) {
    console.log(err);
  }
}


function* handleGetVideoById() {
  try {
    const data = yield call(VideoService.requestGetVideo);
    yield put({
      type: Video.LOAD_BY_ID,
      payload: data.video
    });
  } catch (err) {
    console.log(err);
  }
}


function* videoSaga() {
  yield takeLatest(Video.GET_ALL, handleGetAllVideos);
  yield takeLatest(Video.GET_BY_ID, handleGetVideoById);
  //takeLatest(VideoActions.GET_VIDEO, handleGetVideo)
  
}

// export { handleGetAllVideos, handleGetVideo };

export default [videoSaga];
