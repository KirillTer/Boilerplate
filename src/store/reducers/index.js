import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import produce from 'immer';

import mainReducer from './mainReducer';
import playersReducer from './playersReducer';
import gamesReducer from './gamesReducer';

const curriedMainReducer = produce(mainReducer)
const curriedPlayersReducer = produce(playersReducer)
const curriedGamesReducer = produce(gamesReducer)

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    curriedMainReducer,
    curriedPlayersReducer,
    curriedGamesReducer,
})