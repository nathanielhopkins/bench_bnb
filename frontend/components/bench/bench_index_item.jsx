import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return(
    <div className='index-item-info'>
      <span className='index-item-category'>Rating:</span>
      <span className='index-item-copy'>{bench.rating}</span>
      <span className='index-item-category'>Description:</span>
      <span className='index-item-copy'>{bench.description}</span>
    </div>
  );
};

export default BenchIndexItem;