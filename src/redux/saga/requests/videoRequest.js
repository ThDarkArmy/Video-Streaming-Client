import axios from "axios";

const BASE_URL = "http://localhost:5000/videos/"

export function requestGetAllVideos(){
    return axios.request({
        method: 'get',
        url: BASE_URL+"all"
    })
}

export function requestGetVideo(videoId){
    return axios.request({
        method: 'get',
        url: BASE_URL+'/byId/'+videoId
    })
}

export function requestPostVideoDescription(videoDescription){
    return axios.request({
        method: 'post',
        url: BASE_URL+'videoDescription',
        body: videoDescription
    })
}

export function requestPostVideoFile(videoFile, videoId){
    return axios.request({
        method: 'post',
        url: BASE_URL+"videoFile/"+videoId,
        body: videoFile
    })
}

export function requestUpdateVideo(videoFile, videoId){
    return axios.request({
        method: 'put',
        url: BASE_URL + videoId,
        body: videoFile
    })
}

export function requestUpdateThumbnail(imageFile, videoId){
    return axios.request({
        method: 'patch',
        url: BASE_URL+"thumbnail/"+videoId,
        body: imageFile
    })
}

export function requestDeleteVideo(videoId){
    return axios.request({
        method: 'delete',
        url: BASE_URL+"/"+videoId
    })
}