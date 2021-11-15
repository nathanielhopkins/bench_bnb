import { RECEIVE_BENCH_REVIEWS, RECEIVE_BENCH_REVIEW } from "../actions/bench_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BENCH_REVIEWS:
      return action.reviews;
    case RECEIVE_BENCH_REVIEW:
      if(action.review) {
      return Object.assign({}, state, {[action.review.id]: action.review })
      } else {
        return state
      }
    default:
      return state;
  };
};

export default reviewsReducer;