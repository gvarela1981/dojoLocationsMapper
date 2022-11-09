function createMap() {
    // Map
    // center of the map
    var center = [-34.60378, -58.3816];
  
    // Create the map
    var map = L.map('map').setView(center, 13);
  
    // Set up the OSM layer
    L.tileLayer(
      'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18
      }).addTo(map);
  
    // add a marker in the given location
    L.marker(center).addTo(map);
  
  }