import React from "react";
import Comment from "./Comment";
import { Grid, Typography, Avatar, TextField, Button } from "@mui/material";
import ReactDOM from "react-dom";

const comments = [
  {
    id: 1,
    user: "Dark Army",
    date: "3 months ago",
    commentText: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.`,
    likes: 100,
    dislikes: 200,
  },
  {
    id: 2,
    user: "Dark Army",
    date: "3 months ago",
    commentText: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.`,
    likes: 100,
    dislikes: 200,
  },
  {
    id: 3,
    user: "Dark Army",
    date: "3 months ago",
    commentText: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.`,
    likes: 100,
    dislikes: 200,
  },
  {
    id: 4,
    user: "Dark Army",
    date: "3 months ago",
    commentText: `Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the industry's
                        standard dummy text ever since the 1500s, when an unknown
                        printer took a galley of type and scrambled it to make a
                        type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining
                        essentially unchanged. It was popularised in the 1960s with
                        the release of Letraset sheets containing Lorem Ipsum
                        passages, and more recently with desktop publishing software
                        like Aldus PageMaker including versions of Lorem Ipsum.`,
    likes: 100,
    dislikes: 200,
  },
];

const CommentList = () => {
  //const iframe = '<iframe height="265" style="width: 100%;" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">See the Pen <a href="https://codepen.io/ycw/pen/JqwbQw/">fx.</a> by ycw(<a href="https://codepen.io/ycw">@ycw</a>) on <a href="https://codepen.io">CodePen</a>.</iframe>';
  // const iframe = '<iframe src="https://github.com/Sakthiiii/gmail-clone-server/tree/main" width="540" height="450"></iframe>';
  // const iframe = '<iframe height="265" style="width: 100%;" scrolling="no" title="fx." src="//codepen.io/ycw/embed/JqwbQw/?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true"></iframe>';
  return (
    // <div dangerouslySetInnerHTML={ {__html:  "iframe"}}/>

    <div style={{paddingTop:20, paddingRight: 40}}>
      <div>
        <Typography>{100} comments</Typography>
      </div>
      <Grid style={{marginTop:20}} container direction="row" justifyContent="space-between" alignItems="flex-start">
        <Grid item xs={1}>
          <Avatar
            alt="Jack Sparrow"
            src="https//images.pexels.com/photos/6386956/pexels-photo-6386956.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </Grid>
        <Grid item xs={9}>
        <TextField style={{marginTop:-10}} fullWidth label="Post Comment"  variant="standard" />
        </Grid>
        <Grid item xs={2}>
        <Button variant="outlined" style={{marginLeft:15}}>Comment</Button>
        </Grid>

      </Grid>
      <Grid style={{marginTop:50}} container direction="column" justifyContent="center">
        {" "}
        {comments.map((comment) => (
          <Grid item>
            <Comment key={comment.id} commentData={comment} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default CommentList;
