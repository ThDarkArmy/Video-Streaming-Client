import { call, put } from "@redux-saga/core/effects";
import { loadAllVideos, loadVideo } from '../../videos/videoActions';
import { requestGetAllVideos, requestGetVideo } from "../requests/videoRequest";

function* handleGetAllVideos(){
    try{
        const response = yield call(requestGetAllVideos);
        const { data } = response;
        // yield put(loadAllVideos(data))
        yield put({
            type: "GET_ALL_VIDEOS_SUCCEEDED",
            payload: data
        })

    }catch(err){
        console.log(err)
    }
}

function* haandleGetVideo(){
    try{
        const response = yield call(requestGetVideo);
        const { data } = response
        yield put(loadVideo(data))

    }catch(err){
        console.log(err)
    }
}

export {
    handleGetAllVideos,
    haandleGetVideo
}