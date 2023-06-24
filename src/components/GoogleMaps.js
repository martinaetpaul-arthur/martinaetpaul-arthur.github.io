import React from 'react';
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { Box, CircularProgress } from '@mui/material';


const Map = () => {
    const abbazia = { lat: 45.7298706151249, lng: 8.632667229975121 };
    const lidoDiSesto = { lat: 45.73005446450972, lng: 8.619991846390114 };
    const center = { lat: (abbazia.lat + lidoDiSesto.lat) / 2, lng: (abbazia.lng + lidoDiSesto.lng) / 2 }
    const ref = React.useRef();

    React.useEffect(() => {
        const map = new window.google.maps.Map(ref.current, {
            center: center,
            zoom: 15
        });

        new window.google.maps.Marker({
            position: abbazia,
            map: map,
            title: "Abbazia",
            clickable: true
        });

        new window.google.maps.Marker({
            position: lidoDiSesto,
            map: map,
            title: "Lido di Sesto",
            clickable: true
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