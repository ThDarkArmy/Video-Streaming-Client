import React from 'react'
import Drawer from '@material-ui/core/Drawer';
import { makeStyles, mergeClasses } from '@material-ui/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import Grid from "@material-ui/core/Grid"


const useStyles = makeStyles({
    root: {
        height: 500,
        width: "5%",
        backgroundColor: "red",
    }
})


const Sidebar = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Grid 
                container 
                direction="column" 
                alignItems="center"
                justify="space-between">
                <Grid item>
                    <InboxIcon />
                </Grid>
                <Divider/>
                <Grid item>
                    <InboxIcon />
                </Grid>
                <Divider/>
                <Grid item>
                    <InboxIcon />
                </Grid>
                <Divider/>
                <Grid item>
                    <InboxIcon />
                </Grid> 

             </Grid>
 
            <Divider/>
        </div>
    )
}

export default Sidebar
