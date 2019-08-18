import { put, takeLatest, all } from 'redux-saga/effects';

import { LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
SINGIN_START, SINGIN_SUCCESS, SINGIN_FAILURE,
SINGUP_START, SINGUP_SUCCESS, SINGUP_FAILURE} from '../actionTypes'
import { fetchMainApi, singInApi, singUpApi } from '../../api'

function* fetchMain() {
    try {
        const result = yield fetchMainApi()  
        yield put({ type: LOAD_MAIN_SUCCESS, payload: result });
    } catch(error) {
        yield put({ type: LOAD_MAIN_FAILURE, payload: error });
    }
}
function* singInAction(action) {
    console.log('SAGA action SingIN payload - ', action)
    try {
        const user = yield singInApi(action.payload)  
        console.log('SAGA after API SingIN user - ', user)
        yield put({ type: SINGIN_SUCCESS, payload: user });
    } catch(error) {
        yield put({ type: SINGIN_FAILURE, payload: error });
    }
}
function* singUpAction(action) {
    console.log('SAGA action SingUP payload - ', action)
    try {
        const user = yield singUpApi(action.payload)
        console.log('SAGA after API SingUP user - ', user)
        yield put({ type: SINGUP_SUCCESS, payload: user });
    } catch(error) {
        yield put({ type: SINGUP_FAILURE, payload: error });
    }
}

function* mainWatcher() {
    yield takeLatest(LOAD_MAIN_START, fetchMain)
}

function* singInWatcher() {
    yield takeLatest(SINGIN_START, singInAction)
}

function* singUpWatcher() {
    yield takeLatest(SINGUP_START, singUpAction)
}

export default function* mainSaga() {
    yield all([
        mainWatcher(),
        singInWatcher(),
        singUpWatcher()
    ]);
}