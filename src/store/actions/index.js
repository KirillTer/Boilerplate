import {LOAD_MAIN_START, LOAD_MAIN_SUCCESS, LOAD_MAIN_FAILURE} from './actionTypes'

import { fetchMainApi } from '../../api/'

export const loadMain = () => async dispatch => {
    dispatch({type: LOAD_MAIN_START})

    try {
        const mainData = await fetchMainApi()
        dispatch({type: LOAD_MAIN_SUCCESS, payload: mainData})
    } catch (err) {
        dispatch({type: LOAD_MAIN_FAILURE, payload: err, error: true})
    }
}
