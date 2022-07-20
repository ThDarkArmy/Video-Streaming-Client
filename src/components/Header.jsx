import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import AddVideoIcon from "@mui/icons-material/VideoCall";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { makeStyles } from "@mui/styles";
import TitleLogo from "../assets/logos/TitleLogo.png";
import { Paper, Divider } from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from '@mui/icons-material/History';
import MusicIcon from '@mui/icons-material/MusicVideo';
import SportsIcon from '@mui/icons-material/SportsSoccer';
import GamesIcon from '@mui/icons-material/SportsEsports';
import MoviesIcon from '@mui/icons-material/LocalMovies';
import NewsIcon from '@mui/icons-material/Announcement';
import LiveIcon from '@mui/icons-material/LiveTv';
import LearningIcon from '@mui/icons-material/Note';
import AboutIcon from '@mui/icons-material/Info';
import PrivacyIcon from '@mui/icons-material/PrivacyTip';
import ContactIcon from '@mui/icons-material/Email';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';




const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  marginTop: 50,
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1,
    
  },
  logo: {
    maxWidth: 75,
    marginLeft: -25,
  },
  title: {},
  drawer: {
    minWidth: 0,
    width: 75,
    marginTop: 58,
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    
  },
  iconButtonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
  },
  iconButton: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center",
    marginTop: 30,
  },
  // mainDrawer: {
  //   width: "220px",

  // }
});

export default function Header({home}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [value, setValue] = useState(null);
  const [open, setOpen] = useState(false);
  const theme = useTheme()

  const classes = useStyles();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleDrawerClose = () => {
    setOpen(!open);
  };

  const imageClick = () => {
    return window.open('mailto:email@example.com?subject=Subject&body=Body%20goes%20here')
  }

  return (
    <Box sx={{ display: "flex" }} className={classes.root}>
      <AppBar
        elevation={0}
        position="fixed"
        className={classes.appbar}
        sx={{ backgroundColor: "#FFFFFF", display: "flex" }}
      >
        <Toolbar variant="dense" sx={{ minHeight: 55 }}>
          <IconButton
            onClick={handleDrawerClose}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ color: "#181A1B" }} />
          </IconButton>

          
          <img src={TitleLogo} alt="logo" className={classes.logo} onClick={() => imageClick()}/>
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, marginLeft: -2 }}
            style={{ color: "#181A1B" }}
          >
            DarkArmy
          </Typography>
      
          <TextField
            id="outlined-basic"
            label="Search"
            variant="outlined"
            size="small"
            sx={{ marginLeft: "10%", width: "45%", borderRadius: 0 }}
          />
          <Button
            disableRipple
            className={classes.searchBtn}
            sx={{
              height: 40,
              borderRadius: 0,
              borderColor: "#C4C4C4",
              backgroundColor: "#F8F8F8",
              "&:hover": { borderColor: "#181A1B" },
            }}
            variant="outlined"
            startIcon={
              <SearchIcon
                style={{ color: "#222222", marginLeft: "30%", fontSize: 20 }}
              />
            }
          />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "flex", md: "flex" } }}>
            <IconButton size="large" aria-label="add-video">
              <AddVideoIcon style={{ color: "#181A1B" }} />
            </IconButton>
            <IconButton size="large" aria-label="notifications">
              <Badge badgeContent={0} color="error">
                <NotificationsIcon style={{ color: "#181A1B" }} />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={"menuId"}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
            >
              <AccountCircle style={{ color: "#181A1B" }} />
            </IconButton>
          </Box>
          <Divider />
          <Divider />
        </Toolbar>
      </AppBar>
      {home && <Drawer
        classes={{ paper: classes.drawer }}
        variant="permanent"
        open={home}
        sx={{
          display: { xs: "none", sm: "block", md: "block" },
          marginLeft: -2,
        }}
      >
        <Box className={classes.iconButtonContainer}>
          <Box className={classes.iconButton}>
            <HomeIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ fontSize: 10 }}>Home</Typography>
          </Box>
          <Box className={classes.iconButton}>
            <ExploreIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ fontSize: 10 }}>Explore</Typography>
          </Box>
          <Box className={classes.iconButton}>
            <SubscriptionsIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ fontSize: 10 }}>Subscriptions</Typography>
          </Box>
          <Box className={classes.iconButton}>
            <VideoLibraryIcon sx={{ fontSize: 30 }} />
            <Typography sx={{ fontSize: 10 }}>Library</Typography>
          </Box>
        </Box>
      </Drawer>}
      <Drawer
        classes={{ paper: classes.mainDrawer }}
        sx={{
          flexShrink: 0,
          width: "220px",
          [theme.breakpoints.down("xs")]:{
            width: "100%",
          },
          "& .MuiDrawer-paper": {
            width: "220px",
            boxSizing: "border-box",
            [theme.breakpoints.down("xs")]:{
              width: "100%",
            },
            // [theme.breakpoints.only("xs")]:{
            //   width: "100%",
            // }
          },
      
        }}
        variant="temporary"
        anchor="left"
        open={open}
      >
        <DrawerHeader sx={{marginTop: 0, marginLeft: 0}}>
          <IconButton
            onClick={handleDrawerClose}
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{ color: "#181A1B" }} />
          </IconButton>

          <img src={TitleLogo} alt="logo" className={classes.logo} />
          <Typography
            className={classes.title}
            variant="h6"
            noWrap
            component="div"
            sx={{ marginLeft: -2 , marginRight: 0}}
            style={{ color: "#181A1B" }}
          >
            DarkArmy
          </Typography>
        </DrawerHeader>
        <Divider/>
        <List>
          {['Home', 'Explore', 'Subscriptions'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <HomeIcon/>}
                {index === 1 && <ExploreIcon/>}
                {index === 2 && <SubscriptionsIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Library', 'History'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <HistoryIcon/>}
                {index === 1 && <VideoLibraryIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{marginTop: 2, marginLeft: 2, fontSize: 14}}>BEST OF DARKARMY</Typography>
        <List>
          {['Music', 'Sports', 'Gaming', 'Movies', 'News', 'Live', 'Fashion & Beauty', 'Learning'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <MusicIcon/>}
                {index === 1 && <SportsIcon/>}
                {index === 2 && <GamesIcon/>}
                {index === 3 && <MoviesIcon/>}
                {index === 4 && <NewsIcon/>}
                {index === 5 && <LiveIcon/>}
                {index === 6 && <MusicIcon/>}
                {index === 7 && <LearningIcon/>}
              </ListItemIcon>
              <ListItemText sx={{fontSize:12}} primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <Typography sx={{marginTop: 2, marginLeft: 2, fontSize: 14}}>MORE FROM DARKARMY</Typography>
        <List>
          {['Settings', 'Help', 'Send Feedback', 'About', 'Contact Us', 'Privacy Policy', 'Terms & Conditions'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index === 0 && <SettingsIcon/>}
                {index === 1 && <HelpIcon/>}
                {index === 2 && <FeedbackIcon/>}
                {index === 3 && <AboutIcon/>}
                {index === 4 && <ContactIcon/>}
                {index === 5 && <PrivacyIcon/>}
                {index === 6 && <HomeIcon/>}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
    </Box>
  );
}


// 6363316050