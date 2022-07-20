import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Link } from "react-router-dom";
import { CardHeader, Grid, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles({
  card: {
    maxWidth: 450,
    maxHeight: 330,
    borderRadius: 0,
    position: "static",
    //backgroundColor: "#001E3C",
  },
  cardHeader: {
    marginTop: -10,
  },
});

export default function RecommendedVideo({ videoData }) {
  const navigate = useNavigate()
  const classes = useStyles();
  const theme = useTheme();
  let { _id, channel, description, title, views, thumbnailStreamingPath } = videoData;

  const handleClick = ()=>{
    navigate('/watch?video='+_id)
  }

  return (
    <Card
      classes={{ root: classes.card }}
      sx={{ display: "inline-flex", maxWidth: 500 }}
    >
     
      <Grid container  direction="row">
        <Grid item xs={5}  style={{ display: "flex", justifyContent: "flex-start" }}>
        
          <CardMedia
            component="img"
            image={thumbnailStreamingPath}
            alt="thumbnail"
          />
          
        </Grid>
        <Grid item xs={7}  style={{ display: "flex", justifyContent: "flex-start" }}>
          <Grid container alignItems="center" direction="row">
           
              <CardHeader
              onClick={handleClick}
                className={classes.cardHeader}
                action={
                  <IconButton
                    className={classes.settingsIcon}
                    aria-label="settings"
                  >
                    <MoreVertIcon />
                  </IconButton>
                }
                titleTypographyProps={{ variant: "h10" }}
                title={
                  <Link
                    to={"/watch?video=" + _id}
                    style={{ textDecoration: "none", color: "#030303" }}
                  >
                    {title.substring(0, 65)}
                  </Link>
                }
                //subheader={channel.substring(0,100)}
              />
           
              <CardContent sx={{ marginTop: -1 }} className={classes.content}>
                <Typography
                  style={{ display: "block" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {" "}
                  Channel
                </Typography>
                <Typography
                  style={{ display: "inline-block", margin: "0px 0px 0px 0px" }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  10 days ago .
                </Typography>
                <Typography
                  style={{
                    display: "inline-block",
                    margin: "0px 0px 0px 10px",
                  }}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {views} Views
                </Typography>
              </CardContent>
           
        </Grid>
      </Grid>
      </Grid>
   

      {/* <Grid container alignItems="left" direction="column"></Grid> */}
    </Card>
  );
}
