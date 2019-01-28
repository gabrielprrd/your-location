// const McDonaldsApi = require('mcdonalds-api')('BR') // Require McDonalds API with browserify
const errorContainer = document.getElementById('error-container'); // Div where the error message will display


// -------------------- IIFE to get and display user's location -----------------------//
(function() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        errorContainer.innerHTML = "Geolocation is not supported by this browser.";
    }

    function showPosition(position) {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
    
            
//------------------------------- Leaflet Map ----------------------------------//
            const mymap = L.map('mapid').setView([lat, lon], 16);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox.streets',
                accessToken: 'pk.eyJ1IjoiZ2FicmllbHBycmQiLCJhIjoiY2pxNGk5cXRyMW1vYjQ5bWxpN2w5NzNudiJ9.sWtUkGsysA1wPZl8xkmqbA'
            }).addTo(mymap);   
        }   
})();

