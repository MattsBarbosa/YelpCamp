mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
container: 'map', // container ID
style: 'mapbox://styles/mapbox/streets-v11', // style URL
center: campground.geometry.coordinates, // starting position [lng, lat]
zoom: 9, // starting zoom
projection: 'globe' // display the map as a 3D globe
});
map.on('style.load', () => {
map.setFog({}); // Set the default atmosphere style
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .addTo(map)

new mapboxgl.Popup({offset: 25})
    .setLngLat(campground.geometry.coordinates)
    .setHTML(`<h3>${campground.title}</h3><p>${campground.location}</p>`)
    .setMaxWidth('200px')
    .addTo(map);