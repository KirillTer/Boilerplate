import * as R from 'ramda'
import {SINGIN_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGIN_SUCCESS:
            console.log('SINGIN_SUCCESS', payload)
            return R.merge(state, {
                user: payload
            })
        default: return state
    }
}