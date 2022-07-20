import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AppBar from '@mui/material/AppBar';
import VideoList from "../components/VideosList";
import { Divider,CssBaseline, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme)=>({
  root: {
    minHeight: 0,
    [theme.breakpoints.up('sm')]: {
      width: "94%",
      marginLeft: "6%"
    },
    [theme.breakpoints.between('xs','sm')]: {
      width: "90%",
      marginLeft: "10%"
    },
    [theme.breakpoints.down('xs')]: {
      width: "100%",
    },
  },
  tab: { 
    
    "&.MuiButtonBase-root.MuiTab-root": {
      backgroundColor: "#F2F2F2",
      borderRadius: 50,
      marginLeft: 8,
      fontSize: 12,
      minHeight: 0,
      height: 35,
      marginTop: 7
    }
  }
}))



export default function TopScrollbar() {
  const [selectedTab, setSelectedTab] = useState(0);
  const classes = useStyles()

  const indexToTabName = {
    0: "all",
    1: "adventure",
    2: "music",
    3: "sports",
    4: "movies",
    5: "education",
    6: "health",
    7: "news",
    8: "science",
    9: "technology",
    10: "finance",
    11: "stockmarket",
    12: "yoga"
  }

  const handleChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
   
  <div className={classes.root}>
   
    <AppBar elevation={0} position="fixed" sx={{display: "flex", backgroundColor: "#FFFFFF", marginTop:7}}>
      <Divider />
     
      <Tabs
        tabItemContainerStyle={{position: "fixed", bottom:"0"}}
        selectedTab={selectedTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="videos" 
        sx={{color: "#FFFFFF", marginLeft: "5%"}}
      >
        <Tab label="All" className={classes.tab}/>
        <Tab label="Adventure" className={classes.tab}/>
        <Tab label="Music" className={classes.tab}/>
        <Tab label="Sports" className={classes.tab}/>
        <Tab label="Movies" className={classes.tab}/>
        <Tab label="Education" className={classes.tab}/>
        <Tab label="Health" className={classes.tab}/>
        <Tab label="News" className={classes.tab}/>
        <Tab label="Science" className={classes.tab}/>
        <Tab label="Technology" className={classes.tab}/>
        <Tab label="Finance" className={classes.tab}/>
        <Tab label="Stock Market" className={classes.tab}/>
        <Tab label="Yoga" className={classes.tab}/>
      </Tabs>
      <Divider />
      </AppBar>
    <div style={{marginTop: 90}}>
      <VideoList category={indexToTabName[selectedTab]}/>
    </div>
      
    </div>

  );
}
