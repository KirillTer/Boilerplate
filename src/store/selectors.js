import { createSelector } from 'reselect'
import * as R from 'ramda'

const stateMainSelector = state => state.curriedMainReducer;
export const getMainSelector = createSelector(stateMainSelector, state => state.main);

const statePlayersSelector = state => state.curriedPlayersReducer;
export const getPlayersSelector = createSelector(statePlayersSelector, state => { 
    return state.playersSearch ? state.players.filter(item => R.contains(state.playersSearch.toLowerCase(), item.name.toLowerCase())) : state.players
});

const stateGamesSelector = state => state.curriedGamesReducer;
export const getGamesSelector = createSelector(stateGamesSelector, state => state.games);

const stateAuthSelector = state => state.curriedAuthReducer;
export const getUserSelector = createSelector(stateAuthSelector, state => state.user);
export const getLoginSelector = createSelector(stateAuthSelector, state => state.logined);
