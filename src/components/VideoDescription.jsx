import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Box,
  Paper,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  Grid,
} from "@mui/material";
import { formatDate } from "../functions/timeDateManipulator";
import LikeIcon from "@mui/icons-material/ThumbUp";
import DislikeIcon from "@mui/icons-material/ThumbDown";
import ShareIcon from "@mui/icons-material/Share";
import SaveVideoIcon from "@mui/icons-material/AddBox";
import Avatar from "@material-ui/core/Avatar";

const VideoDescription = () => {
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {}, []);

  const {video, loading , error} = useSelector(
    (state) => state.streamingVideoReducer
  );


  // functions
  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {!loading && (
        <div>
          <Grid
            container
            display="flex"
            direction="column"
            justifyContent="center"
            alignItems="top"
            sx={{ marginLeft: 0, boxShadow: "none" }}
          >
            <Grid item>
              <div style={{ marginTop: 25 }}>
                <Typography variant="h6">{video.title}</Typography>
              </div>
            </Grid>
            <Grid item>
              <div style={{ marginTop: 20, marginRight: 20 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Typography>
                      {video.views} views{" "}
                      {"• " + formatDate(video.createdAt)}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <List
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "",
                        alignItem: "center",
                      }}
                    >
                      {["Like", "Dislike", "Share", "Save"].map(
                        (text, index) => (
                          <ListItem button key={text}>
                            <ListItemIcon sx={{ marginRight: -3 }}>
                              {index === 0 && <LikeIcon />}
                              {index === 1 && <DislikeIcon />}
                              {index === 2 && <ShareIcon />}
                              {index === 3 && <SaveVideoIcon />}
                            </ListItemIcon>
                            <ListItemText
                              primary={text}
                              sx={{ marginRight: 4 }}
                            />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Divider />
            <Grid item>
              <div style={{ marginTop: 20 }}>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid item>
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Avatar src={"hhh"} />
                      <Grid item>
                        <Grid container direction="column">
                          <Typography
                            display="flex"
                            sx={{ flexGrow: 1 }}
                            style={{ marginLeft: 25 }}
                          >
                            {"Channel"}
                          </Typography>
                          <Typography
                            display="flex"
                            sx={{ flexGrow: 1 }}
                            style={{ marginLeft: 25, fontSize:11 }}
                          >
                            {"372k Subscribers"}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Button
                      style={{
                        marginRight: 50,
                        backgroundColor: "#A30000",
                        color: "#fff",
                      }}
                    >
                      Subscribe
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Grid>
            <Grid item>
              <div
                style={{ marginTop: 30, paddingLeft: 65, paddingRight: 100 }}
              >
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="self-start"
                  sx={{}}
                >
                  <Typography position="static" variant="p">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.
                  </Typography>

                  <Divider />

                  {showMore && (
                    <div>
                      <Grid container direction="column" alignItems="center">
                        <Typography
                          style={{ marginTop: 15 }}
                          position="static"
                          variant="p"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </Typography>

                        <Typography
                          style={{ marginTop: 25 }}
                          position="static"
                          variant="p"
                        >
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s,
                          when an unknown printer took a galley of type and
                          scrambled it to make a type specimen book. It has
                          survived not only five centuries, but also the leap
                          into electronic typesetting, remaining essentially
                          unchanged. It was popularised in the 1960s with the
                          release of Letraset sheets containing Lorem Ipsum
                          passages, and more recently with desktop publishing
                          software like Aldus PageMaker including versions of
                          Lorem Ipsum.
                        </Typography>
                      </Grid>
                    </div>
                  )}

                  <Button
                    style={{ marginLeft: -7, marginTop: 10 }}
                    onClick={() => handleShowMore()}
                  >
                    {showMore ? "SHOW LESS" : "SHOW MORE"}
                  </Button>
                </Grid>
              </div>
            </Grid>
          </Grid>
        </div>
      )}
    </div>
  );
};

export default VideoDescription;
