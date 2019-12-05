import { put, call, takeLatest, all } from 'redux-saga/effects';

import { LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE } from '../actionTypes'
import { fetchMainApi } from '../../api'

function* callFetchMain() {
    try {
        const result = yield call(fetchMainApi)  
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}

function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, callFetchMain)
}

export default function* rootSaga() {
    yield all([
        mainWatcher(),
    ]);
}