export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};

    this.updateMarkers = this.updateMarkers.bind(this);
  }

  updateMarkers(benches) {
    benches.forEach(bench => {
      if (!this.markers.hasOwnProperty(bench.id)) {
        this.createMarkerFromBench(bench);
      };
    });
    window.markers = this.markers
  }

  createMarkerFromBench(bench) {
    let map = this.map
    let newMarker = new google.maps.Marker({
      position: { lat: bench.lat, lng: bench.lng },
      map,
    });
    
    this.markers[bench.id] = newMarker
  }
}