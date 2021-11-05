import React from 'react';
import { Link } from 'react-router-dom';

const ReviewForm = ({benchId, author, createBenchReview}) => {

  return(
    <div className='review-form'>
      <Link to={`/benches/${benchId}`}><button>Cancel</button></Link>
    </div>
  )
};

export default ReviewForm;