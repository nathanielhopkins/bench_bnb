export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';
export const RECEIVE_BENCH_REVIEWS = 'RECEIVE_BENCH_REVIEWS'
export const RECEIVE_BENCH_REVIEW = 'RECEIVE_BENCH_REVIEW'

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

export const fetchBench = benchId => dispatch => {
  APIUtil.fetchBench(benchId)
    .then(bench => dispatch(receiveBench(bench)))
}

export const fetchBenches = (filters) => dispatch => {
  APIUtil.fetchBenches(filters)
    .then(benches => dispatch(receiveBenches(benches)));
};

export const createBench = bench => dispatch => {
  APIUtil.createBench(bench)
    .then(bench => dispatch(receiveBench(bench)));
};

export const fetchBenchReviews = benchId => dispatch => {
  APIUtil.fetchBenchReviews(benchId)
    .then(reviews => dispatch(receiveBenchReviews(reviews, benchId)));
}

export const createBenchReview = review => dispatch => {
  APIUtil.createBenchReview(review)
    .then(review => receiveBenchReview(review))
}