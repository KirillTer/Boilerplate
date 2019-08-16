import * as R from "ramda";

export const getMainSelector = state => R.values(state.main);

export const getAuthMainSelector = state =>
  R.values(state.main);

export const getAdminMainSelector = state =>
  R.values(state.main);
