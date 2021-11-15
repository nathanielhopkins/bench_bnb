import {
  RECEIVE_REVIEW_ERRORS,
  RECEIVE_BENCH_REVIEW
}
  from "../actions/bench_actions";

const reviewErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case (RECEIVE_REVIEW_ERRORS):
      return action.errors;
    case (RECEIVE_BENCH_REVIEW):
      return [];
    default:
      return state;
  }
};

export default reviewErrorsReducer;