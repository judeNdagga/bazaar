"use client";
import React, { useState } from "react";
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import "../../../public/images/logos/logo1.png";
import MobileNavbar2 from "../components/MobileNavbar2";
export default function Dealerships() {
  const [activeMarker, setActiveMarker] = useState(null);


  //ref number - 595009G
  
  const markers = [
    {
      id: 1,
      lname: "Kampala",
      position: { lat: 0.328080, lng: 32.605833 },
    },
    {
      id: 2,
      lname: "Mukono",
      position: { lat: 0.928900, lng: 33.709838 },
    },
    {
      id: 3,
      lname: "Gayaza",
      position: { lat: 2.098056, lng: 32.619954 },
    },
  ];

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };


  const containerStyle = {
    width: "100%",
    height: "100%",
  };


  const center = {
    lat: 0.328056,
    lng: 32.605833,
  };


  
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="w-screen h-screen">
      
      <GoogleMap
        mapContainerStyle={containerStyle}
        
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {/* Child components, such as markers, info windows, etc. */}
        {markers.map(({ id, lname, position }) => (
          <MarkerF 
          key={id} 
          position={position}
          icon={{
            url: "https://cdn-icons-png.flaticon.com/128/684/684908.png",
            scaledSize: {
              width: 60, height: 60,
              equals: function (other: google.maps.Size): boolean {
                throw new Error("Function not implemented.");
              }
            },
          
            
            
          }}
          animation={google.maps.Animation.DROP}
          onClick={() => handleActiveMarker(id)}
          
          >
            {activeMarker === id ? (
              <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                <div className="text-black p-8 text-lg">
                  {lname}
                  </div>
              </InfoWindowF>
            ) : null}
            
          </MarkerF>
        ))}
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}