import React, { useEffect } from "react";
import Grid from '@mui/material/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch} from 'react-redux';
import {fetchAllVideos} from '../actions/videoActions';
import RecommendedVideo from "./RecommendedVideo";


const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0
  }

}));


const RecommendedVideoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {videos, loading, error} = useSelector((state) => state.videoReducer.fetchAllVideosReducer);

  useEffect(() => {
    dispatch(fetchAllVideos());

    // eslint-disable-next-line
  }, []);

  return (
   
        <Grid container spacing={1} className={classes.root} direction="column">
        
            {videos && videos.map((video) => (
            <Grid item className={classes.videoGrid}>
                <RecommendedVideo key={video._id} videoData={video} />
            </Grid>
            ))}
      </Grid>
    );
};

export default RecommendedVideoList;
