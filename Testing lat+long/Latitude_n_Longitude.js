// attempts to store lat and long into a format that can be used
var y = document.getElementById("lat+lon");
/* Stores lat and lon as global variables so that we can manipulate them
*/
var lat = 0;
var lon = 0;

// Function retrives lat + lon and calls printLat
function positionFunc() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success);
    } else {
        y.innerHTML = "you suck";
    }
}
// changes global variable lat and lon
function success(position) {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    printLat(lat, lon);
}

// Prints lat + lon
function printLat(lat, lon) {
    y.innerHTML = "latitude ==" + lat + "<br> longitude ==" + lon;
}