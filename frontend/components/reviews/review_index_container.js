import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { fetchBenchReviews } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => ({
  reviews: state.entities.reviews[ownProps.benchId],
  benchId: ownProps.benchId
});

const mapDispatchToProps = dispatch => ({
  fetchBenchReviews: benchId => dispatch(fetchBenchReviews(benchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);