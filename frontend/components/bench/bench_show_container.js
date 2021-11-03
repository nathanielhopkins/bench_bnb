import { connect } from 'react-redux';
import BenchShow from './bench_show';

const mapStateToProps = ( state, ownProps ) => ({
  benchId: ownProps.match.params.benchId
})

export default connect(mapStateToProps, null)(BenchShow)