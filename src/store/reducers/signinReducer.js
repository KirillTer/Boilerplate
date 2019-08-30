import {SINGIN_SUCCESS, SINGIN_FAILURE} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGIN_SUCCESS:
            console.log('SINGIN_SUCCESS', payload)
            state['user'] = payload;
            return;
        case SINGIN_FAILURE:
            console.log('SINGIN_FAILURE', payload)
            state['error'] = payload;
            return;
        default: return state
    }
}