import React, { useEffect } from "react";

function MyLocationMap() {
  useEffect(() => {
    // Ask for current location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Create map centered at current location
        const map = new window.google.maps.Map(document.getElementById("map"), {
          center: userLocation,
          zoom: 10,
        });

        // Add marker at current location
        new window.google.maps.Marker({
          position: userLocation,
          map,
          title: "You are here",
        });
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }, []);

  return (
    <div>
      <h1>📍 My Current Location</h1>
      <div
        id="map"
        style={{ width: "100%", height: "400px", border: "1px solid black" }}
      ></div>
    </div>
  );
}

export default MyLocationMap;
