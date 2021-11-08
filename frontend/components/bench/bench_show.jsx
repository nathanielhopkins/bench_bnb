import React from 'react';
import { Link, Route, useLocation } from 'react-router-dom';
import BenchMap from './bench_map';
import BenchDetail from './bench_detail';
import ReviewIndexContainer from '../reviews/review_index_container';
import ReviewFormContainer from '../reviews/review_form_container';

const BenchShow = ({ bench, benchId, fetchBench }) => {
  const benches = {
    [benchId]: bench
  };

  const reviewLink = `/benches/${benchId}/review`;
  const reviewLinkToggle = useLocation().pathname == `/benches/${benchId}` ? 
  <Link to={reviewLink}>
    <button className='review-form-button'>
      Leave a Review
    </button>
    </Link> : null

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
        <ReviewIndexContainer benchId={benchId} />
        {reviewLinkToggle}
        <Route 
          exact path="/benches/:benchId/review" 
          render={() => <ReviewFormContainer benchId={benchId} />}
        />
      </div>
    </div>
  )
};

export default BenchShow;