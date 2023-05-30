import React from 'react';
import GoogleMapReact from 'google-map-react';
// import { useMediaQuery } from '@mui/material';
// import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
// import Rating from '@mui/lab/Rating';

import "./styles.css"

const Map = () => {
    const coordinates = { lat : 0, long : 0};

    return (
        <div className="mapContainer">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={''}
                onChange={''}
                onChildClick={''}
            >
            </GoogleMapReact>
        </div>
    );
};

export default Map;