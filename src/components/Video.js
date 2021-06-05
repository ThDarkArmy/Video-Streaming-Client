import React from 'react';
import VideoThumbnail from 'react-video-thumbnail';

// import Video from 'react-video-renderer';

const VideoComponent = ({ videoData }) => {
    return (
        <div className='video'>
            <h2>Video</h2>
            {/* <video src="http://localhost:5000/videostream/60aba24089f3585d242c7812" type="video/mp4" width="320" height="240" controls>
                Your browser does not support the video.
                </video> */}
            <VideoThumbnail
                videoUrl="http://localhost:5000/videostream/60aba24089f3585d242c7812"
                thumbnailHandler={(thumbnail) => console.log(thumbnail)}
                width={220}
                height={150}
                />

            {/* <Video src="http://localhost:5000/videostream/60aba24089f3585d242c7812">
            {(video, state, actions) => (
                <div>
                {video}
                <div>{state.currentTime} / {state.duration} / {state.buffered}</div>
                <progress value={state.currentTime} max={state.duration} onChange={actions.navigate} />
                <progress value={state.volume} max={1} onChange={actions.setVolume} />
                <button onClick={actions.play}>Play</button>
                <button onClick={actions.pause}>Pause</button>
                <button onClick={actions.requestFullScreen}>Fullscreen</button>
                </div>
            )}
            </Video>
             */}
            
        </div>
    )
}

export default VideoComponent;
