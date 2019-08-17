import {LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE,
SINGIN_START, SINGIN_SUCCESS, SINGIN_FAILURE,
SINGUP_START, SINGUP_SUCCESS, SINGUP_FAILURE} from './actionTypes'

import { fetchMainApi, singInApi, singUpApi } from '../../api/'

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
    console.log('Start Sign IN Action - ', email, password)
    dispatch({type: SINGIN_START})

    try {
        const user = await singInApi(email, password)
        console.log('After Api Sign IN Action - ', user)
        dispatch({type: SINGIN_SUCCESS, payload: user})
    } catch (err) {
        dispatch({type: SINGIN_FAILURE, payload: err, error: true})
    }
}

export const singUpAction = (email, password) => async dispatch => {
    console.log('Start Sign UP Action - ', email, password)
    dispatch({type: SINGUP_START})

    try {
        const user = await singUpApi(email, password)
        console.log('After Api Sign UP Action - ', user)
        dispatch({type: SINGUP_SUCCESS, payload: user})
    } catch (err) {
        dispatch({type: SINGUP_FAILURE, payload: err, error: true})
    }
}