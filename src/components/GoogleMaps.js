import React from 'react';
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Box, CircularProgress } from '@mui/material';


const Map = () => {
    const abbazia = { lat: 45.728171878011, lng: 8.633180186455347 };
    const lidoDiSesto = { lat: 45.75126366906859, lng: 8.674680280393812 };
    const center = { lat: (abbazia.lat + lidoDiSesto.lat) / 2, lng: (abbazia.lng + lidoDiSesto.lng) / 2 }
    const ref = React.useRef();

    React.useEffect(() => {
        const map = new window.google.maps.Map(ref.current, {
            center: center,
            zoom: 12
        });

        new window.google.maps.Marker({
            position: abbazia,
            map: map,
        });

        new window.google.maps.Marker({
            position: lidoDiSesto,
            map: map,
        });
    });

    return <Box ref={ref} id="map" height={300} width='100%' />;
}

function GoogleMaps() {

    const render = (status) => {
        switch (status) {
            case Status.LOADING:
                return <CircularProgress />;
            default:
                return <></>;
        }
    };

    return (
        <Wrapper apiKey="AIzaSyB_tRrwaiiNgqEfEicRCfT4XrhpoPFEj4U" render={render}>
            <Map></Map>
        </Wrapper>
    );
}

export default GoogleMaps; 