import {LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
SINGIN_START, SINGIN_SUCCESS, SINGIN_FAILURE} from './actionTypes'

import { fetchMainApi, singInApi } from '../../api/'

export const loadMain = () => async dispatch => {
    dispatch({type: LOAD_MAIN_START})

    try {
        const mainData = await fetchMainApi()
        dispatch({type: LOAD_MAIN_SUCCESS, payload: mainData})
    } catch (err) {
        dispatch({type: LOAD_MAIN_FAILURE, payload: err, error: true})
    }
}

export const singInAction = (email, password) => async dispatch => {
    console.log('Start Sign in Action - ', email, password)
    dispatch({type: SINGIN_START})

    try {
        const user = await singInApi(email, password)
        console.log('After Api Sign in Action - ', user)
        dispatch({type: SINGIN_SUCCESS, payload: user})
    } catch (err) {
        dispatch({type: SINGIN_FAILURE, payload: err, error: true})
    }
}