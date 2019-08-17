import * as R from "ramda";

export const getMainSelector = state => R.values(state.mainReducer);

export const getAuthMainSelector = state =>
  R.values(state.mainReducer);

export const getAdminMainSelector = state =>
  R.values(state.mainReducer);
