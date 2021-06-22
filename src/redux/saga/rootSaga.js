import { takeLatest } from "@redux-saga/core/effects";
import { handleGetAllVideos, handleGetVideo } from './handlers/videosHandler'
import { GET_ALL_VIDEOS, GET_VIDEO } from '../videos/videoTypes'

export function* watcherSaga(){
    yield takeLatest(GET_ALL_VIDEOS, handleGetAllVideos)
}