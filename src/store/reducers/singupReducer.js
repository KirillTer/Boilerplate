import produce from 'immer';
import {SINGUP_SUCCESS, SINGUP_FAILURE} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGUP_SUCCESS:
            console.log('SINGUP_SUCCESS', payload)
            return produce(state, draft => {
                draft.user = payload;
            })
        case SINGUP_FAILURE:
            console.log('SINGUP_FAILURE', payload)
            return produce(state, draft => {
                draft.error = payload;
            })
        default: return state
    }
}