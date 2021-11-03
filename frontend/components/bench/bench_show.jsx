import React from 'react';
import BenchMap from './bench_map';

class BenchShow extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchBench(this.props.benchId)
  }

  render() {
    const { bench, benchId, fetchBench } = this.props;
    const benches = {
      [benchId]: bench
    };
    
    return(
      <div className="bench-show">
        <div className='bench-show-map'>
          <BenchMap 
            benches={benches} 
            benchId={benchId}
            fetchBench={fetchBench}
            singleBench={true}
          />
        </div>
        <div className="bench-show-details">
        </div>
      </div>
    )
  }
}

export default BenchShow;