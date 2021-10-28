import React from 'react';
import BenchIndex from './bench_index';
import BenchMap from './bench_map';

class Search extends React.Component {
  render() {
    const { benches, fetchBenches } = this.props;
    
    return(
      <div>
        <BenchMap />
        <BenchIndex benches={benches}  fetchBenches={fetchBenches} />
      </div>
    )
  }
}

export default Search;