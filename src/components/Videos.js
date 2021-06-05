import React from 'react'
import { connect } from 'react-redux';
import VideoComponent from './Video';

const Videos = ({videos}) => {
    return (
        <div className="videos">
            {videos.map((video)=>(
                <VideoComponent key={video._id} videoData={video}/>
            ))}

        </div>
    )
}

const mapStateToProps = (state) => {
    console.log(state.video)
    return {
        videos: state.video.videos,
    }
}

export default connect(mapStateToProps)(Videos);
