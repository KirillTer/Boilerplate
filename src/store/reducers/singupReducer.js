import * as R from 'ramda'
import {SINGUP_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGUP_SUCCESS:
            console.log('SINGUP_SUCCESS', payload)
            return R.merge(state, {
                user: payload
            })
        default: return state
    }
}