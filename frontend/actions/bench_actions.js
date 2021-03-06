export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_BENCH_REVIEWS = 'RECEIVE_BENCH_REVIEWS';
export const RECEIVE_BENCH_REVIEW = 'RECEIVE_BENCH_REVIEW';
export const RECEIVE_BENCH_ERRORS = 'RECEIVE_BENCH_ERRORS';
export const RECEIVE_REVIEW_ERRORS = 'RECEIVE_REVIEW_ERRORS';

import * as APIUtil from "../util/bench_api_util";

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

export const receiveBenchReviews = (reviews, benchId) => ({
  type: RECEIVE_BENCH_REVIEWS,
  reviews,
  benchId
});

export const receiveBenchReview = (review) => ({
  type: RECEIVE_BENCH_REVIEW,
  review
})

export const receiveBenchErrors = errors => ({
  type: RECEIVE_BENCH_ERRORS,
  errors
});

export const clearBenchErrors = () => ({
  type: RECEIVE_BENCH_ERRORS,
  errors: []
});

export const receiveReviewErrors = errors => ({
  type: RECEIVE_REVIEW_ERRORS,
  errors
});

export const clearReviewErrors = () => ({
  type: RECEIVE_BENCH_REVIEW,
  errors: []
});

export const fetchBench = benchId => dispatch => {
  APIUtil.fetchBench(benchId)
    .then(bench => dispatch(receiveBench(bench)))
}

export const fetchBenches = (filters) => dispatch => (
  APIUtil.fetchBenches(filters)
    .then(benches => dispatch(receiveBenches(benches)))
);

export const createBench = bench => dispatch => (
  APIUtil.createBench(bench)
    .then(bench => dispatch(receiveBench(bench)),
      err => dispatch(receiveBenchErrors(err.responseJSON)))
);

export const fetchBenchReviews = benchId => dispatch => (
  APIUtil.fetchBenchReviews(benchId)
    .then(reviews => dispatch(receiveBenchReviews(reviews, benchId)))
);

export const createBenchReview = review => dispatch => (
  APIUtil.createBenchReview(review)
    .then(review => dispatch(receiveBenchReview(review)),
    err => dispatch(receiveReviewErrors(err.responseJSON)))
);