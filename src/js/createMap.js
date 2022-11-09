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

    addPOI(map, testCoords)
}

let residentialStyle = {
  radius: 8,
  fillColor: '#00f',
  color: '#000',
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
}

let comercialStyle = Object.assign({}, residentialStyle) 
let mixtaStyle = Object.assign({}, residentialStyle) 
let defaultStyle = Object.assign({}, residentialStyle) 

comercialStyle["fillColor"] = '#0f0'
mixtaStyle["fillColor"] = '#f00'
defaultStyle["fillColor"] = '#afafaf'

let testCoords = {
  "type": "Feature",
  "properties": {"categoria": "Residencial"},
  "geometry": {
      "type": "Point",
      "coordinates": [-58.3816, -34.60378]
  }
}

function addPOI(map, feature) {
  let currentStyle;
  L.geoJSON(feature, {
    pointToLayer(feature, latlng) {
      if (feature.properties.categoria) {
        switch (feature.properties.categoria) {
          case 'Residencial':
            currentStyle = Object.assign({}, residentialStyle);
            break;
          case 'Comercial':
            currentStyle = Object.assign({}, comercialStyle);
            break;
          default:
            currentStyle = Object.assign ({}, defaultStyle);
            break;
        }
      }
      return L.circleMarker(latlng, currentStyle);
    }
  }).addTo(map);
}