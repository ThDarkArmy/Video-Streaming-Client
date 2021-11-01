import { call, put, takeLatest } from "@redux-saga/core/effects";
import {VideoStreaming} from '../constants'
import videoServices from "../services/videoServices";


function* handleGetVideo(action){
   
    try{
        
        const data = yield call(videoServices.requestGetVideo, action.payload.id)
        yield put({
            type: VideoStreaming.STREAM,
            payload: data
        })
        
    }catch(error){
        console.log(error)
    }
   
}


function* streamingSaga(){
    yield takeLatest(VideoStreaming.GET, handleGetVideo)
}


export default [streamingSaga]