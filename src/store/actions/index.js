import {LOAD_MAIN_START,
SINGIN_START, SINGIN_SUCCESS, SINGIN_FAILURE,
SINGUP_START, SINGUP_SUCCESS, SINGUP_FAILURE} from './actionTypes'

import { singInApi, singUpApi } from '../../api/'

export const loadMain = () => ({
    type: LOAD_MAIN_START
})

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