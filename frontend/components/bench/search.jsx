import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

class Search extends React.Component {
  render() {
    const { benches, updateFilter } = this.props;
    
    return(
      <div className='user-pane'>
        <div className='left-pane'>
          <BenchMap benches={benches} updateFilter={updateFilter} />
        </div>
        <div className='right-pane'>
          <BenchIndex benches={benches} />
        </div>
      </div>
    )
  }
}

export default Search;