import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createBenchReview } from '../../actions/bench_actions';

const mapStateToProps = (state, ownProps) => ({
  benchId: ownProps.benchId,
  author: state.entitites.users[state.session.id].username
});

const mapDispatchToProps = dispatch => ({
  createBenchReview: review => dispatch(createBenchReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm)