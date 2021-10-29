import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

class Search extends React.Component {
  render() {
    const { benches, fetchBenches } = this.props;
    
    return(
      <div className='user-pane'>
        <div className='left-pane'>
          <BenchMap benches={benches} />
        </div>
        <div className='right-pane'>
          <BenchIndex benches={benches}  fetchBenches={fetchBenches} />
        </div>
      </div>
    )
  }
}

export default Search;