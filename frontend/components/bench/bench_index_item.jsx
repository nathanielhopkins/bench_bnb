import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return(
    <div className='bench-index-container'>
      <div className='index-item-info'>
        <span className='index-item-category'>Rating:</span>
        <span className='index-item-copy'>{bench.avg_rating}</span>
        <span className='index-item-category'>Description:</span>
        <span className='index-item-copy'>{bench.description}</span>
      </div>
      <div>
        <img src={bench.photoUrl} className="bench-item-photo"/>
      </div>
    </div>
  );
};

export default BenchIndexItem;