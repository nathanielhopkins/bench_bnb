import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createBenchReview, clearReviewErrors } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => ({
  benchId: ownProps.benchId,
  author: state.entities.users[state.session.id].username,
  errors: state.errors.review
});

const mapDispatchToProps = dispatch => ({
  createBenchReview: review => dispatch(createBenchReview(review)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)