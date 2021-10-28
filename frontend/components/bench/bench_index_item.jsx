import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return(
    <div className='index-item-info'>
      <span className='index-item-category'>Description:</span>
      <span className='index-item-copy'>{bench.description}</span>
      <span className='index-item-category'>Latitude:</span>
      <span className='index-item-copy'>{bench.lat}</span>
      <span className='index-item-category'>Longitude:</span>
      <span className='index-item-copy'>{bench.lng}</span>
    </div>
  );
};

export default BenchIndexItem;