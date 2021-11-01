export const UPDATE_BOUNDS = 'UPDATE_BOUNDS';

import { fetchBenches } from "./bench_actions";

export const actionUpdateBounds = bounds => ({
  type: UPDATE_BOUNDS,
  bounds
});

export const updateBounds = bounds => {
  return (dispatch, getState) => {
    dispatch(actionUpdateBounds(bounds));
    return fetchBenches(getState().ui.filters)(dispatch)
  };
}