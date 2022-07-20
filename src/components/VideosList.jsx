import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import VideoCard from "./VideoCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllVideos } from "../actions/videoActions";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    [theme.breakpoints.up("xs")]: {
      padding: 10,
    },
    [theme.breakpoints.down("xs")]: {
      paddingTop: 10,
    },
  },
  videoGrid: {
    paddingLeft: 0,
  },
}));

const VideoList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const {videos, loading, error} = useSelector((state) => state.videoReducer.fetchAllVideosReducer);

  

  useEffect(() => {
    dispatch(fetchAllVideos());
    localStorage.setItem("video", "videostreaming");
    // eslint-disable-next-line
  }, []);

  return (
    <div className="root">
      <Grid container spacing={1} className={classes.root}>
        {videos &&
          videos.map((video) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className={classes.videoGrid}
            >
              <VideoCard key={video._id} videoData={video} />
            </Grid>
          ))}
      </Grid>
    </div>
  );
};

export default VideoList;
