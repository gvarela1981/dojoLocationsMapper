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
      if (!feature.type && feature.type != 'Feature' && feature.geometry.type != 'Point') {
        console.log("geoJson must have a 'Feature' type attribute and geometry must have a 'Point' type attribute")
        return false
      }
      else {
        if (feature.properties.categoria) {
          switch (feature.properties.categoria) {
            case 'Residencial':
              currentStyle = Object.assign({}, residentialStyle);
              break;
            case 'Comercial':
              currentStyle = Object.assign({}, comercialStyle);
              break;
            case 'Mixta':
              currentStyle = Object.assign({}, mixtaStyle);
              break;
            default:
              currentStyle = Object.assign ({}, defaultStyle);
              break;
          }
        }
        else {
          currentStyle = Object.assign ({}, defaultStyle);
        }
        return L.circleMarker(latlng, currentStyle);
      }
    }
  }).addTo(map);
}

function validateCoords(coords) {
  // input format : <float> lon, <float> lat
  //                -180 <= lon >= 180
  //                -90 <= lat <= 90
  // Example: -109.05, 41.00
  // Output: true / false

  // Do something
  let isValid = true
  let coords_arr = coords.split(", ");
  // if lat is missing
  if(coords_arr.length != 2) {
    return false
  }
  if (parseFloat(coords_arr[0]) < -180 | parseFloat(coords_arr[0]) > 180 | isNaN(parseFloat(coords_arr[0]))) {isValid = false}
  if (parseFloat(coords_arr[1]) < -90 | parseFloat(coords_arr[1]) > 90| isNaN(parseFloat(coords_arr[1]))) {isValid = false}
  return isValid
}
