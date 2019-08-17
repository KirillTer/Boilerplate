import * as R from 'ramda'
import {SINGIN_SUCCESS} from '../actions/actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGIN_SUCCESS:
            console.log('SINGIN_SUCCESS', payload)
            return R.merge(state, {
                main: payload
            })
        default: return state
    }
}