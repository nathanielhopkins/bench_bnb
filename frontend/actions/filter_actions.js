export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';
export const UPDATE_FILTER = 'UPDATE_FILTER';

import { fetchBenches } from "./bench_actions";

export const actionUpdateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updateBounds = bounds => {
  return (dispatch, getState) => {
    dispatch(actionUpdateBounds(bounds));
    return fetchBenches(getState().ui.filters)(dispatch)
  };
}