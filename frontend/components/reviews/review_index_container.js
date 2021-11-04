import { connect } from 'react-redux';
import ReviewIndex from './review_index';

const mapStateToProps = state => ({
  reviews: state.entities.reviews[this.props.benchId]
});

const mapDispatchToProps = dispatch => ({
  fetchBenchReviews: benchId => dispatch(fetchBenchReviews(benchId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);