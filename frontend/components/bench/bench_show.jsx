import React from 'react';
import { Link } from 'react-router-dom';
import BenchMap from './bench_map';
import BenchDetail from './bench_detail';

const BenchShow = ({ bench, benchId, fetchBench }) => {
  const benches = {
    [benchId]: bench
  };

  return(
    <div className="bench-show">
      <div className='bench-show-map'>
        <Link to="/">Back to Benches Index</Link>
        <BenchMap 
          benches={benches} 
          benchId={benchId}
          fetchBench={fetchBench}
          singleBench={true}
        />
      </div>
      <div className="bench-show-details">
        <BenchDetail bench={bench} />
      </div>
    </div>
  )
};

export default BenchShow;