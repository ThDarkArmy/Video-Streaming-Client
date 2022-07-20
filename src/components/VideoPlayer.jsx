import React, { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { secondsToUTC } from "../functions/timeDateManipulator";

import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/styles";
import fullscreen from "screenfull";


const useStyles = makeStyles({
  root: {
    // width:500
  },
  playerWrapper: {
    position: "relative"
  },
});

let count = 0;

const VideoPlayer = () => {

    const playerRef = useRef(null)
    const playerContainerRef = useRef(null)
    const controlsRef = useRef(null)
  const [state, setState] = useState({
    playing: true,
    muted: false,
    volume: 0.5,
    playbackRate: 1.0,
    played: 0,
    seeking: false
  });

  const [timeDisplayFormat, setTimeDisplayFormat] = useState('normal')
  const { playing, muted, volume, playbackRate, played, seeking } = state;
  const classes = useStyles();


  // functions
  const handlePlayPause = ()=>{
      setState({...state, playing: !state.playing})
  }

  const handleRewind = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime()-10)
  }

  const handleFastForward = () => {
    playerRef.current.seekTo(playerRef.current.getCurrentTime()+10)
  }

  const handleKeyPress = (e) => {
    console.log("Event", e.keyCode)
  }

  const handleMute = ()=>{
    setState({...state, muted: !state.muted})
  }

  const handleVolumeChange = (e, newVolume) => {
    setState({
      ...state,
      volume: parseFloat(newVolume/100),
      muted: newVolume===0? true: false
    })
  }

  const handleVolumeSeekDown = (e, newVolume) => {
    setState({
      ...state,
      volume: parseFloat(newVolume/100),
      muted: newVolume===0? true: false
    })
  }

  const handlePlaybackRateChange = (rate) => {
      setState({
        ...state, playbackRate:rate
      })
  }

  const handleToggleFullScreen = () => {
    fullscreen.toggle(playerContainerRef.current)
  }

  const handleProgress = (changeState) => {

    // if(count>2){
    //   controlsRef.current.style.visibility = "hidden";
    //   count = 0;
    // }

    // if(controlsRef.current.style.visibility == "visible"){
    //   count+=1
    // }

    // if(!seeking)
    //   setState({...state, ...changeState})
  }

  const handleSeekChange = (e, newValue) => {
      setState({...state, played: parseFloat(newValue/100)})
  }

  const handleSeekMouseDown = (e) => {
    setState({...state, seeking: true})
  }

  const handleSeekMouseUp = (e, newValue) => {
    setState({...state, seeking: false})
    playerRef.current.seekTo(newValue/100)
  }

  const handleTimeDisplayFormat = ()=>{
    setTimeDisplayFormat(timeDisplayFormat==='normal'? 'remaining': 'normal')
  }

  const handleMouseMove = () => {
    // controlsRef.current.style.visibility = "visible";
    count = 0
  }

  const currentTime = playerRef.current ? playerRef.current.getCurrentTime() : "00:00";
  const duration = playerRef.current ? playerRef.current.getDuration() : "00:00";

  const elapsedTime = timeDisplayFormat==='normal'? secondsToUTC(currentTime) : `-${secondsToUTC(duration - currentTime)}`
  const totalDuration = secondsToUTC(duration)


  const {video, loading , error} = useSelector(
    (state) => state.streamingVideoReducer
  );

  useEffect(() => {

    
  }, []);

  return (
    <div className={classes.root}>
      {!loading && (
        <Container maxWidth="md">
          <div 
          onMouseMove={handleMouseMove}
          ref={playerContainerRef} 
          className={classes.playerWrapper}
            tabIndex={0}
            onKeyPress={e=>handleKeyPress(e)}
            >
            <ReactPlayer
              ref={playerRef}
              url={video.videoStreamingPath}
              muted={muted}
              playing={playing}
              volume={volume}
              playbackRate={playbackRate}
              onProgress={handleProgress}
              width={"100%"}
              height="100%"
              controls={true}
            />
            {/* <PlayerControls 
                ref={controlsRef}
                key={video.video._id}
                onPlayPause={handlePlayPause} 
                playing={playing} 
                onRewind={handleRewind}
                onFastForward={handleFastForward}
                muted={muted}
                onMute={handleMute}
                onVolumeChange={handleVolumeChange}
                onVolumeSeekUp={handleVolumeSeekDown}
                playbackRate={playbackRate}
                onPlaybackRateChange={handlePlaybackRateChange}
                volume={volume}
                onToggleFullScreen={handleToggleFullScreen}
                played={played}
                onSeek={handleSeekChange}
                onSeekMouseDown={handleSeekMouseDown}
                onSeekMouseUp={handleSeekMouseUp}
                elapsedTime={elapsedTime}
                totalDuration={totalDuration}
                onChangeTimeDisplayFormat={handleTimeDisplayFormat}
                /> */}
          </div>
         
        </Container>
      )}
    </div>
  );
};



export default VideoPlayer;
