import GoogleMapReact from 'google-map-react';
import { HtmlHTMLAttributes, useEffect, useState } from "react";
import Marker from './Marker';

interface Props extends HtmlHTMLAttributes<HTMLElement> {
    coordinates?: string;
    isEditable?: boolean;
    onChangeLocalization?(value: string): void;
}

export default function GoogleMap({ isEditable = false, coordinates, onChangeLocalization, ...props }: Props) {

    const [geolocation, setGeoLocation] = useState({
        lat: -12.047038,
        lng: -77.077199
    });

    const getCenter = () => {
        if (coordinates)
            return {
                lat: +coordinates?.split(',')[0],
                lng: +coordinates?.split(',')[1]
            };
        if (geolocation.lat == -12.047038) {
            navigator.geolocation.getCurrentPosition((data) => {
                setGeoLocation({
                    lat: data.coords.latitude,
                    lng: data.coords.longitude
                })
            })
        }
        return geolocation

    }

    const [markers, setMarkers] = useState<any>([]);

    const initMarkers = () => {
        if (coordinates)
            setMarkers([{
                lat: +coordinates?.split(',')[0],
                lng: +coordinates?.split(',')[1]
            }])
    }

    useEffect(() => {
        initMarkers()
    }, []);

    const getZoom = () => {
        if (coordinates || geolocation.lat != -12.047038)
            return 17;
        return 12;
    }

    const onClick = (coord: any) => {
        if (isEditable) {
            let markersTemp = [...markers];
            markersTemp.pop();
            markersTemp.push({
                lat: coord.lat,
                lng: coord.lng
            })
            onChangeLocalization!(`${coord.lat},${coord.lng}`)
            setMarkers(markersTemp);
        }
    }

    return (
        <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.GOOGLE_MAP_KEY! }}
            center={getCenter()}
            zoom={getZoom()}
            onClick={onClick}
        >
            {
                markers.map((marker: any) => (
                    < Marker key={`${marker.lat},${marker.lng}`}
                        lat={marker.lat}
                        lng={marker.lng}
                    />
                ))
            }
        </GoogleMapReact>
    );
}
