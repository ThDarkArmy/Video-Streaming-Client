import React, { useState } from "react";
import {
  Grid,
  Avatar,
  Typography,
  Button,
  IconButton,
  TextField,
} from "@mui/material";
import LikeIcon from "@mui/icons-material/ThumbUp";
import DislikeIcon from "@mui/icons-material/ThumbDown";
import styled, { ThemeProvider } from "styled-components";

const SizedAvatar = styled(Avatar)`
  ${({ size }) => `
    width: ${size}px; 
    height: ${size}px; 
  `};
`;

const Comment = ({ commentData }) => {
  const [readMore, setReadMore] = useState(false);
  const [reply, setReply] = useState(false);

  const { user, commentText, likes, dislikes } = commentData;

  const handleReadMore = () => {
    setReadMore(!readMore);
  };

  const handleClickReply = () => {
    setReply(!reply);
  };
  return (
    <div style={{ marginTop: 20 }} className="root">
      <Grid container direction="row">
        <Grid item xs={1}>
          <Avatar />
        </Grid>
        <Grid item xs={11}>
          <Grid container direction="column" aligntItems="flex-start">
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="left"
                alignItems="flex-start"
              >
                <Typography style={{ fontSize: 15 }}>{user}</Typography>
                <Typography style={{ marginLeft: 20, fontSize: 13 }}>
                  {" 3 months ago"}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="column" alignItems="flex-start">
                <Typography style={{ fontSize: 14 }}>
                  {readMore ? commentText : commentText.substring(0, 200)}
                </Typography>
                <Button fullwidth={false} onClick={() => handleReadMore()}>
                  {readMore ? "Show Less" : "Read More"}
                </Button>
              </Grid>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="left"
                alignItems="flex-start"
              >
                <IconButton>
                  {" "}
                  <LikeIcon />
                </IconButton>
                <Typography>{likes}</Typography>
                <IconButton>
                  <DislikeIcon />
                </IconButton>
                <Typography>{dislikes}</Typography>

                <Button onClick={() => handleClickReply()}>Reply</Button>
              </Grid>
            </Grid>
            {reply && (
              <Grid item>
                <Grid
                  style={{ marginTop: 10 }}
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                >
                  <Grid item xs={1}>
                    <SizedAvatar
                      size={30}
                      alt="Jack Sparrow"
                      src="https//images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                    />
                  </Grid>
                  <Grid item xs={9}>
                    <TextField
                      style={{ marginTop: -10 }}
                      sx={{height: 20}}
                      size="small"
                      fullWidth
                      label="Add a public reply"
                      variant="standard"
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Button variant="outlined" style={{ marginLeft: 15, height: 30}}>
                      Reply
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Comment;
