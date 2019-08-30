import produce from 'immer';
import {SINGIN_SUCCESS, SINGIN_FAILURE} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGIN_SUCCESS:
            console.log('SINGIN_SUCCESS', payload)
            return produce(state, draft => {
                draft.user = payload;
            })
        case SINGIN_FAILURE:
            console.log('SINGIN_FAILURE', payload)
            return produce(state, draft => {
                draft.error = payload;
            })
        default: return state
    }
}