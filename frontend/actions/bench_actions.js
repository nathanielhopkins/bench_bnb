export const RECEIVE_BENCHES = 'RECEIVE_BENCHES';
export const RECEIVE_BENCH = 'RECEIVE_BENCH';

import * as APIUtil from "../util/bench_api_util";

export const receiveBenches = benches => ({
  type: RECEIVE_BENCHES,
  benches
});

export const receiveBench = bench => ({
  type: RECEIVE_BENCH,
  bench
});

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