import { put, call, takeLatest, all } from 'redux-saga/effects';

import { LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
LOAD_PLAYERS_START, LOAD_PLAYERS_SUCCESS, LOAD_PLAYERS_FAILURE,
LOAD_GAMES_START, LOAD_GAMES_SUCCESS, LOAD_GAMES_FAILURE } from '../actionTypes'
import { fetchMainApi, fetchPlayersApi, fetchGamesApi } from '../../api'

function* callFetchMain() {
    try {
        const result = yield call(fetchMainApi)  
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}

function* callFetchPlayers({payload}) {
    try {
        const result = yield call(() => fetchPlayersApi(payload))
        yield put({ type: LOAD_PLAYERS_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_PLAYERS_FAILURE, payload: error });
    }
}

function* callFetchGames({payload}) {
    try {
        const result = yield call(() => fetchGamesApi(payload))
        yield put({ type: LOAD_GAMES_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_GAMES_FAILURE, payload: error });
    }
}

function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, callFetchMain)
}

function* playersWatcher() {
    yield takeLatest(LOAD_PLAYERS_START, action => callFetchPlayers(action))
}

function* gamesWatcher() {
    yield takeLatest(LOAD_GAMES_START, action => callFetchGames(action))
}

export default function* rootSaga() {
    yield all([
        mainWatcher(),
        playersWatcher(),
        gamesWatcher()
    ]);
}