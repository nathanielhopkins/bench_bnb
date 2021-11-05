import { RECEIVE_BENCH_REVIEWS, RECEIVE_BENCH_REVIEW } from "../actions/bench_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BENCH_REVIEWS:
      return action.reviews;
    case RECEIVE_BENCH_REVIEW:
      return Object.assign({}, state, {[action.review.id]: action.review })
    default:
      return state;
  };
};

export default reviewsReducer;