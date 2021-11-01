import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import AddVideoIcon from '@mui/icons-material/VideoCall';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { makeStyles } from '@mui/styles';
import TitleLogo from "../assets/logos/TitleLogo.png"
import { Paper, Divider  } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  marginTop: 50,
  // necessary for content to be below app bar
  // ...theme.mixins.toolbar,
}));


const useStyles = makeStyles({
  root: {
    display: "flex",
    flexGrow: 1
  },
  logo: {
    maxWidth: 75,
    marginLeft: -25
  },
  title: {
    
  },
  drawer: {
    minWidth: 0,
    width: "6%",
    backgroundColor: "blue",
    marginTop: 58,
    display: "flex",
    flexDirection: "column",
    justifyContent: "top",
    alignItems: "center"
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

  }
})





export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const [value, setValue] = useState(null)

  const classes = useStyles()

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



  return (
    <Box sx={{display: "flex"}} className={classes.root}>
     
      <AppBar elevation={0} position='fixed' className={classes.appbar} sx={{backgroundColor: "#FFFFFF", display: "flex"}}>
        <Toolbar variant="dense" sx={{minHeight:55}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{color: "#181A1B"}}/>
          </IconButton>
    
            <img src={TitleLogo} alt="logo" className={classes.logo} />
            <Typography
              className={classes.title}
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, marginLeft:-2 }}
              style={{color: "#181A1B"}}
            >
              DarkArmy
            </Typography>
   
          
          <TextField 
            id="outlined-basic" 
            label="Search" 
            variant="outlined" 
            size="small" 
            sx={{marginLeft:"10%", width:"45%", borderRadius: 0}}
            />
          <Button 
            disableRipple
            className={classes.searchBtn}
            sx={{height:40, borderRadius: 0, borderColor:"#C4C4C4", backgroundColor:"#F8F8F8", '&:hover': {borderColor: '#181A1B'}}} 
            variant="outlined" 
            startIcon={<SearchIcon style={{color: "#222222", marginLeft:"30%", fontSize:20}}/>}/>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'flex', md: 'flex' }}}>
            <IconButton size="large" aria-label="add-video">
              <AddVideoIcon style={{color: "#181A1B"}}/>
            </IconButton>
            <IconButton
              size="large"
              aria-label="notifications"
            >
              <Badge badgeContent={0} color="error">
                <NotificationsIcon style={{color: "#181A1B"}}/>
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
              <AccountCircle style={{color: "#181A1B"}}/>
            </IconButton>
          </Box>
          <Divider />
          <Divider />
        </Toolbar>
       
      </AppBar>
      <Drawer classes={{ paper: classes.drawer }} variant="permanent" sx={{ display: { xs: 'none', sm: 'block' }, marginLeft:-2 }}>
        <Box className={classes.iconButtonContainer}>

          <Box className={classes.iconButton} >
              <HomeIcon sx={{ fontSize: 30 }}/>
            <Typography sx={{fontSize:10}}>Home</Typography>
          </Box>
          <Box className={classes.iconButton} >
            <ExploreIcon sx={{ fontSize: 30 }} />
            <Typography sx={{fontSize:10}}>Explore</Typography>
          </Box>
          <Box className={classes.iconButton} >
            <SubscriptionsIcon sx={{ fontSize: 30 }} />
            <Typography sx={{fontSize:10}}>Subscriptions</Typography>
          </Box>
          <Box className={classes.iconButton} >
            <VideoLibraryIcon sx={{ fontSize: 30 }} />
            <Typography sx={{fontSize:10}}>Library</Typography>
          </Box>
        </Box>
     
      </Drawer>
  </Box>
  );
}


