export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(benches) {
    // initialize bench object as empty, will fill when iterating through benches
    const benchesObj = {};

    // iterate through benches, create a marker for each bench that doesn't already have one
    benches.forEach(bench => {
      benchesObj[bench.id] = bench;
      if (!this.markers.hasOwnProperty(bench.id)) {
        this.createMarkerFromBench(bench);
      };
    });
    
    // iterate through markers and remove any that don't correspond to benchesObj
    const markersArray = Object.entries(this.markers);
    markersArray.forEach(marker => {
      let markerObj = marker[0];
      if(!benchesObj.hasOwnProperty(markerObj)) {
        this.markers[markerObj].setMap(null);
        delete this.markers[markerObj];
      };
    });
  }

  createMarkerFromBench(bench) {
    let map = this.map
    let newMarker = new google.maps.Marker({
      position: { lat: bench.lat, lng: bench.lng },
      map,
      title: bench.id.toString()
    });
    
    this.markers[bench.id] = newMarker
  }
}