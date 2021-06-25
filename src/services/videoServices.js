import axios from 'axios';
import {BASE_URL} from '../constants/constants';

const videoEndpoints = () => ({
    requestGetAllVideos: () => 
        axios.request({
            method: 'get',
            url: `${BASE_URL}videos/all`
        }).then(response => response.data),

    requestGetVideo: (videoId) => 
        axios.request({
            method: 'get',
            url: `${BASE_URL}videos/byId/${videoId}`
        }).then(response => response.data),


    requestPostVideoDescription: (videoDescription) =>
        axios.request({
            method: 'post',
            url: `${BASE_URL}videos/videoDescription`,
            body: videoDescription
        }).then(response => response.data),

    requestPostVideoFile: (videoFile, videoId) => 
        axios.request({
            method: 'post',
            url: `${BASE_URL}videos/videoFile/${videoId}`,
            body: videoFile
        }).then(response => response.data),

    requestUpdateVideo: (videoFile, videoId) => 
        axios.request({
            method: 'put',
            url: BASE_URL + videoId,
            body: videoFile
        }).then(response => response.data),


    requestUpdateThumbnail: (imageFile, videoId) =>
        axios.request({
            method: 'patch',
            url: `${BASE_URL}videos/thumbnail/${videoId}`,
            body: imageFile
        }).then(response => response.data),


    requestDeleteVideo: (videoId) =>
        axios.request({
            method: 'delete',
            url: `${BASE_URL}${videoId}`
        }).then(response => response.data),
});

export default videoEndpoints();