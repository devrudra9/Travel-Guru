import React from 'react'
// import { Autocomplete } from '@react-google-maps/api'
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material'

import "./styles.css";

const Header = ({ onPlaceChanged, onLoad }) => {
    return (
        <AppBar position="static">
            <Toolbar className="toolbar">
                <Typography variant="h5" className="title">
                    Travel Guru
                </Typography>
                <Box display="flex">
                    <Typography variant="h6" className="title">
                        Explore new places
                    </Typography>
                    {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
                    <div className="search">
                        <InputBase placeholder="Search…" className="input" />
                    </div>
                    {/* </Autocomplete> */}
                </Box>
            </Toolbar>
        </AppBar>
    );
};


export default Header