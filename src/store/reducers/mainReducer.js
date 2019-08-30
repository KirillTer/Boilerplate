import produce from 'immer';
import {LOAD_MAIN_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_MAIN_SUCCESS:
            console.log('LOAD_MAIN_SUCCESS')
            return produce(state, draft => {
                draft.main = payload;
            })
        default: return state
    }
}