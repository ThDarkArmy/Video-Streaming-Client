import { call, put, takeLatest } from "@redux-saga/core/effects";
import * as VideoActions from "../actions/videoActions";
import VideoService from "../services/videoServices";

function* handleGetAllVideos() {
  try {
    const data = yield call(VideoService.requestGetAllVideos);
    console.log(data)
    yield put({
      type: VideoActions.GET_ALL_VIDEOS_SUCCEEDED,
      payload: data
    });
  } catch (err) {
    console.log(err);
  }
}

function* handleGetVideo(action) {
  try {
    const data = yield call(VideoService.requestGetVideo);
    // yield put();
  } catch (err) {
    console.log(err);
  }
}

function* videoSaga() {
  yield [
    takeLatest(VideoActions.GET_ALL_VIDEOS, handleGetAllVideos),
    takeLatest(VideoActions.GET_VIDEO, handleGetVideo)
  ];
}

export { handleGetAllVideos, handleGetVideo };

export default [videoSaga];
