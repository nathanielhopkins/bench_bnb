import React from 'react';
import { withRouter } from 'react-router';
import BenchIndexItem from './bench_index_item';

class BenchIndex extends React.Component {
  handleClick(benchId) {
    const url = `/benches/${benchId}`
    this.props.history.push(url);
  }

  render() {
    const benches = this.props.benches.map(bench => (
      <div 
        onClick={() => this.handleClick(bench.id)}
        key={bench.id}
        className='bench-index-item'
        >
      <BenchIndexItem  bench={bench} />
      </div>
    ));
    return (
      <div>
        <h1>Benches:</h1>
        <ul>{benches}</ul>
      </div>
    )
  }
}

export default withRouter(BenchIndex);