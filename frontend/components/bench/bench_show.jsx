import React from 'react';
import BenchMap from './bench_map';

class BenchShow extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const bench = this.props;
    const mapCenter = {
      center: { lat: bench.lat, lng: bench.lng }, // bench coords
      zoom: 13
    }
    return(
      <div className="bench-show">
        <div className='bench-show-map'>
          <BenchMap benches={bench} mapCenter={mapCenter} />
        </div>
        <div className="bench-show-details">
          <ul className='bench-show-list'>
            <li>Description: {bench.description}</li>
            <li>Seats: {bench.seating}</li>
            <li>Latitude: {bench.lat}</li>
            <li>Longitude: {bench.lng}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default BenchShow;