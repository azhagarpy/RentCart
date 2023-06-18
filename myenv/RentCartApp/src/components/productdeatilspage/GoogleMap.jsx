import React from 'react';
import GoogleMapReact from 'google-map-react';


export function GoogleMap({ center, zoom }){
  return (
    <div className='product-location'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDYHwSUOuzTJL_iJMPDnGbhfrpWm4JImdQ' }}  // Replace with your API key
        defaultCenter={center}
        defaultZoom={zoom}
      >
        <Marker lat={center.lat} lng={center.lng} />
      </GoogleMapReact>
    </div>
  );
};

const Marker = () => (
  <div
    style={{
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      width: '20px',
      height: '20px',
      borderRadius: '50%',
      backgroundColor: 'red',
    }}
  />
);

export default GoogleMap;
