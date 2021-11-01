import React, { useEffect } from "react";
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import VideoCard from "./VideoCard";
import { useSelector, useDispatch} from 'react-redux';
import {getAllVideos} from '../actions/videoActions'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up('xs')]: {
      padding: 10,
    },
  },
  videoGrid: {
    paddingLeft: 0,
    
  }

}));

const VideoList = () => {

  const classes = useStyles();
  const dispatch = useDispatch()


  const videos = useSelector(state=> state.videoReducer.videos)

  useEffect(() => {
    dispatch(getAllVideos())

    // eslint-disable-next-line
  }, []);


  return (
    <div className="root">
      <Grid container spacing={1} className={classes.root}>
        
        {videos.videos && videos.videos.map((video) => (
          <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.videoGrid}>
              <VideoCard key={video._id} videoData={video} />
          </Grid>
        ))}
      </Grid>
      
    </div>
  );
};

export default VideoList;



