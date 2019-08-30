import { createSelector } from 'reselect'

const stateMainSelector = state => state.curriedMainReducer;
export const getMainSelector = createSelector(stateMainSelector, state => state.main);

const stateAuthSelector = state => state.curriedSingInReducer;
export const getAuthSelector = createSelector(stateAuthSelector, state => state.user);

