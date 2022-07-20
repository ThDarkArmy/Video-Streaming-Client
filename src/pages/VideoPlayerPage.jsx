import React, {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import VideoPlayer from "../components/VideoPlayer";
import Header from "../components/Header";
import { makeStyles, useTheme } from "@mui/styles";
import Grid from "@mui/material/Grid";
import { Divider, Box, Paper } from "@mui/material";
import RecommendedVideoList from "../components/RecommendedVideoList";
import VideoDescription from "../components/VideoDescription";
import CommentList from "../components/CommentList";
import { streamVideo } from "../actions/streamingVideoActions";
import { useLocation } from "react-router-dom";


function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const useStyles = makeStyles({
  root: {},

  container: {
    display: "flex",
    marginTop: 80,
    paddingLeft: "1%",
  },
  leftContainer: {
    
  },
  videoPlayer: {},
});
const VideoPlayerPage = () => {
  const theme = useTheme();
  const classes = useStyles();

  let query = useQuery();
  const dispatch = useDispatch();
  const id = query.get("video");

  useEffect(() => {
    dispatch(streamVideo(id));
    
  }, []);

  return (
    <div className={classes.root}>
      <Header home={false} />
      <Box
        sx={{
          display: {
            sm: "none",
            xs: "none",
            md: "flex",
            lg: "flex",
            xl: "flex",
          },
        }}
      >
        <Grid
          className={classes.container}
          container
          direction="row"
          alignItems="flex-start"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={7}
            style={{ display: "flex", justifyContent: "flex-start" }}
          >
            <Grid className={classes.leftContainer} container direction="column">
              <Grid item>
                <VideoPlayer />
              </Grid>
              <Grid item>
                <VideoDescription />
              </Grid>
              <Divider/>
              <Grid>
                <CommentList />
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={5}
            style={{ display: "flex", justifyContent: "flex-end" }}
          >
            <RecommendedVideoList />
          </Grid>
        </Grid>
      </Box>

      {/*  for small screens */}
      {/* <Box
        sx={{
          display: {
            sm: "none",
            xs: "flex",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Grid
          className={classes.container}
          container
          direction="column"
          alignItems="top"
          justifyContent="space-between"
        >
          <Grid item xs={1}>
            <VideoPlayer />
          </Grid>
          <Grid item xs={1}>
            <VideoDescription />
          </Grid>
          <Grid item xs={1}>
            <RecommendedVideoList />
          </Grid>
        </Grid>
      </Box> */}
    </div>
  );
};

export default VideoPlayerPage;
