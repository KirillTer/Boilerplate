import {SINGUP_SUCCESS, SINGUP_FAILURE} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case SINGUP_SUCCESS:
            console.log('SINGUP_SUCCESS', payload)
            state.user = payload;
            return;
        case SINGUP_FAILURE:
            console.log('SINGUP_FAILURE', payload)
            state.error = payload;
            return;
        default: return state
    }
}