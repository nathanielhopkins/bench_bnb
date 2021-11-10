import React from 'react';

const BenchDetail = ({bench}) => {
  let render;
  if(bench) {
    render = (
      <div>
        <img src={bench.photoUrl} class='bench-detail-photo'></img>
        <ul className="bench-detail-list">
          <li>Rating: {bench.rating}</li>
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