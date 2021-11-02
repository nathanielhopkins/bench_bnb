import React from 'react';
import { withRouter } from 'react-router';
import MarkerManager from '../../util/marker_manager';

class BenchMap extends React.Component {

  componentDidMount() {
    // set the map to show SF
    const mapOptions = {
      center: { lat: 37.7758, lng: -122.435 }, // this is SF
      zoom: 12
    };

    // wrap this.mapNode in a Google Map
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    // create a new MarkerManager
    this.MarkerManager = new MarkerManager(this.map);
    this.MarkerManager.updateMarkers(this.props.benches);

    // create idle listener that calls updateFilter with new bounds
    this.map.addListener("idle", () => {
      // retrieve raw bounds data and package as bounds for API
      let rawBounds = this.map.getBounds();
      let nE = rawBounds.getNorthEast();
      let sW = rawBounds.getSouthWest();
      let bounds = {
        "northEast": {"lat": nE.lat(), "lng": nE.lng()},
        "southWest": {"lat": sW.lat(), "lng": sW.lng()}
      };
      // dispatch new bounds with updateFilter
      this.props.updateFilter('bounds', bounds);
    });

    // add click handler to map
    this.map.addListener('click', (e) => {
      this.handleClick(e.latLng);
    })
  };

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.benches);
  }

  handleClick(coords) {
    this.props.history.push({
      pathname: 'benches/new',
      search: `lat=${coords.lat()}&lng=${coords.lng()}`
    });
  }

  render() {
    return(
      <div 
        id='map-container' 
        ref={ map => this.mapNode = map } 
      />
    )
  }
}

export default withRouter(BenchMap);