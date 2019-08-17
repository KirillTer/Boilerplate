import { put, takeLatest, all } from 'redux-saga/effects';

import { LOAD_MAIN_START, LOAD_MAIN_SUCCESS} from '../actions/actionTypes'
import { fetchMainApi } from '../../api'

function* fetchMain() {
    const result = yield fetchMainApi()  
    yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
}
function* actionWatcher() {
    yield takeLatest(LOAD_MAIN_START, fetchMain)
}
export default function* mainSaga() {
    yield all([
        actionWatcher(),
    ]);
}