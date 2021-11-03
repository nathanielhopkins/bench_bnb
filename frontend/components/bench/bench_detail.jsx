import React from 'react';

const BenchDetail = ({bench}) => {
  let render;
  if(bench) {
    render = (
      <div>
        <ul className="bench-detail-list">
          <li>Description: {bench.description}</li>
          <li>Number of Seats: {bench.seating}</li>
          <li>Latitude: {bench.lat}</li>
          <li>Longitude: {bench.lng}</li>
        </ul>
      </div>
    )
  } else {
    render = <div></div>
  }
  return render
};

export default BenchDetail;