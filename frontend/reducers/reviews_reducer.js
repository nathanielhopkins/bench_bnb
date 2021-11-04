import { RECEIVE_BENCH_REVIEWS } from "../actions/bench_actions";

const reviewsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_BENCH_REVIEWS:
      return Object.assign({}, state, {[action.benchId]: action.reviews});
    default:
      return state;
  };
};

export default reviewsReducer;