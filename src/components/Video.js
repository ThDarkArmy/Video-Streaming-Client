import React from 'react';

// import Video from 'react-video-renderer';

const VideoComponent = ({ videoData }) => {
    return (
        <div className='video'>
            <h2>Video</h2>
            <img src= {videoData.thumbnailPath}
                className="thumbnail" 
                alt="video"/>
        </div>
    )
}

export default VideoComponent;
