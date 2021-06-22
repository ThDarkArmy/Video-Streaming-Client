import React, { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux';
import VideoComponent from './Video';
import { getAllVideos } from '../redux/videos/videoActions';

const Videos = ({videos, getAllVideos}) => {

    useEffect(()=>{
        // alert("This is videos component")
        getAllVideos()
        // console.log("USEEFFECT", videos)
    },[])
    
    return (
        <div className="videos">
            {/* {videos}
            {console.log("comp", videos)} */}
            {videos.map((video)=>(
                <VideoComponent key={video.description} videoData={video}/>
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    // console.log(state.video)
    return {
        videos: state.video.videos,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getAllVideos: ()=> dispatch(getAllVideos())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Videos);
