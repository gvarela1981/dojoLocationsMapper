function createMap() {
    // Map
    // center of the map
    let center = [-34.60378, -58.3816];
  
    // Create the map
    let map = L.map('map').setView(center, 13);
  
    // Set up the OSM layer
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);
  
    // add a marker in the given location
    //L.marker(center).addTo(map);

    let testCoords = {
        "type": "Feature",
        "properties": {"categoria": "Residencial"},
        "geometry": {
            "type": "Point",
            "coordinates": [-58.3816, -34.60378]
        }
    }

    L.geoJSON(testCoords, {
        pointToLayer(feature, latlng) {
			return L.circleMarker(latlng, {
				radius: 8,
				fillColor: '#ff7800',
				color: '#000',
				weight: 1,
				opacity: 1,
				fillOpacity: 0.8
			});
		}
    }).addTo(map);
    console.log("coord added")
 
}