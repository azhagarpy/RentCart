import React, { useEffect, useState } from 'react';

export function GoogleMaps({ userLatitude, userLongitude, locations }){
  const [map, setMap] = useState(null);

 
  useEffect(() => {
    // Load the Google Maps JavaScript API script dynamically
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDYHwSUOuzTJL_iJMPDnGbhfrpWm4JImdQ&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    script.addEventListener('load', initializeMap);

    return () => {
      script.removeEventListener('load', initializeMap);
    };
  }, []);



  useEffect(() => {
    if (map) {
      try{
      showMarkers();
      }
      catch(e){
        console.log(e)
      }
    }
  }, [map, locations]);

  const initializeMap = () => {
    const mapOptions = {
      center: { lat: userLatitude, lng: userLongitude },
      zoom: 12,
    };

    const newMap = new window.google.maps.Map(document.getElementById('map'), mapOptions);
    setMap(newMap);
  };

  const showMarkers = () => {
    if (typeof window.google === 'undefined' || typeof window.google.maps === 'undefined') {
      // Google Maps API is not yet loaded, wait for the next render
      return;
    }

    const bounds = new window.google.maps.LatLngBounds();
    const infowindow = new window.google.maps.InfoWindow();

    const customIcon = {
        url: 'images/icons8-region-64.png', // Replace with the path to your custom icon image
        scaledSize: new window.google.maps.Size(40, 40), // Adjust the size of the icon as needed
      };

    locations.forEach((location) => {
      const marker = new window.google.maps.Marker({
        position: { lat: location.latitude, lng: location.longitude },
        map,
        icon:customIcon,
      });

      // Calculate distance between user's location and the current marker
      const distance = getDistance(userLatitude, userLongitude, location.latitude, location.longitude);

      // Set up info window content
      const content = `<div><strong>${location.name}</strong><br>Distance: ${distance} km</div>`;

      marker.addListener('click', () => {
        infowindow.setContent(content);
        infowindow.open(map, marker);
      });

      bounds.extend(marker.getPosition());
    });

    map.fitBounds(bounds);
  };

  // Helper function to calculate distance between two coordinates using Haversine formula
  const getDistance = (lat1, lon1, lat2, lon2) => {
    try{
    const earthRadius = 6371; // in kilometers
    const dLat = ((lat2 - lat1) * Math.PI) / 180;
    const dLon = ((lon2 - lon1) * Math.PI) / 180;
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos((lat1 * Math.PI) / 180) *
        Math.cos((lat2 * Math.PI) / 180) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance.toFixed(2);
    }
    catch(e){
      console.log(e)
    }
  };

  return <div id="map"  className='my-5'></div>;
};

export default GoogleMaps;
