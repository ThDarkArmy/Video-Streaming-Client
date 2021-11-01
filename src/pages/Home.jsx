import React from 'react';
import Header from '../components/Header';
import { makeStyles } from '@material-ui/core';
import TopScrollbar from "../components/TopScrollbar";
import {Divider, CssBaseline} from '@mui/material';


const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        margin: -5,
    },

    header: {

    },
    topScrollbar: {
       display: "inline-block"
    },
})

const Home = () => {

    const classes = useStyles()

    return (
        <div className={classes.root}>

                <div className={classes.header} >
                    <Header/>
                    <Divider variant="fullwidth"/>
                    <Divider variant="fullwidth"/>'
                    <Divider variant="fullwidth"/>
                </div>]
                    
                <div className={classes.topScrollbar} >
                    <TopScrollbar/>
                    <Divider />
                </div>
           
            
        </div>
    )
}

export default Home
