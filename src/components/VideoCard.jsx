import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from 'react-router-dom'


const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: 20,
    maxWidth: 420,
    maxHeight: 320,
    borderRadius: 0,
  },
  media: {
    width: "100%",
    paddingTop: "56.25%", // 16:9
  },
  cardHeader: {
    marginBottom: "-5%",
  },
  avatar: {
    backgroundColor: red[500],
  },
  content: {
    marginTop: "-10%",
  }

}));

const VideoCard = ({ videoData }) => {
  let {_id, channel, description, title, views, thumbnailStreamingPath } = videoData
  
  
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <Card classes={{ root: classes.card }}>
      <Link to={'/watch?video='+_id}>
       <CardMedia
        className={classes.media}
        image={thumbnailStreamingPath}
        title={title}
       
      />
      </Link>
      <CardHeader className={classes.cardHeader}
        avatar={
          <Avatar src = {thumbnailStreamingPath} aria-label="recipe" className={classes.avatar}/>
        }
        action={
          <IconButton className={classes.settingsIcon} aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={<Link to={'/watch?video='+_id} style={{ textDecoration: 'none', color: "#030303" }}>{title.substring(0,32)}</Link>}
      subheader={channel.substring(0,19)}
      />

    <CardContent className={classes.content}>
        <Typography style={{display: 'inline-block', margin: '0px 0px 0px 50px'}} variant="body2" color="textSecondary" component="p">
         10 days ago .
        </Typography>
        <Typography style={{display: 'inline-block', margin: '0px 0px 0px 10px'}} variant="body2" color="textSecondary" component="p">
          {views} Views
        </Typography>
     
      </CardContent>
    </Card>
  );
};

export default VideoCard;
