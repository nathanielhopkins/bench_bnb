import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

class Search extends React.Component {
  render() {
    const { benches, updateBounds } = this.props;
    
    return(
      <div className='user-pane'>
        <div className='left-pane'>
          <BenchMap benches={benches} updateBounds={updateBounds} />
        </div>
        <div className='right-pane'>
          <BenchIndex benches={benches} />
        </div>
      </div>
    )
  }
}

export default Search;