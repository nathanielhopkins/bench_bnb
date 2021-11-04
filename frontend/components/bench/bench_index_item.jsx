import React from 'react';

const BenchIndexItem = ({ bench }) => {
  return(
    <div className='index-item-info'>
      <span className='index-item-category'>Rating:</span>
      <br/>
      <span className='index-item-copy'>{bench.rating}</span>
      <br/>
      <span className='index-item-category'>Description:</span>
      <br/>
      <span className='index-item-copy'>{bench.description}</span>
    </div>
  );
};

export default BenchIndexItem;