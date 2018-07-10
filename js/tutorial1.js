var map = L.map('mapid').setView([51.505, -0.09], 13);

//add tile layer...replace project id and accessToken with your own
L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'
//adds the given function or layer to the map
}).addTo(map);

//instantiates a marker object given a geographical point and optionally an options object.
var marker = L.marker([51.5, -0.09]).addTo(map);

//instantiates a circle object given a geographical point, and an options object which contains the circle radius.
var circle = L.circle([51.508, -0.11], 500, {
    color: 'red',
    fillColor: '#f03',
    fillOpacity: 0.5
}).addTo(map);

//creates a polygon using the coordinates given.
var polygon = L.polygon([
    [51.509, -0.08],
    [51.503, -0.06],
    [51.51, -0.047]
]).addTo(map);

//bind a pop up to marker click and then open it.
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");

//instantiates a popup object given an optional options object that describes its appearance and location and an optional source object that is used to tap the pop up with a reference to the Lyaer to which it refers.
var popup = L.popup()
    .setLatLng([51.5, -0.09])
    .setContent("I am a standalone popup.")
    .openOn(map);

var popup = L.popup();

//creates a function that returns content based on parameters set with specific coordinates given.
function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

//map.on as an event listener to start the function given in the parameters.
map.on('click', onMapClick);