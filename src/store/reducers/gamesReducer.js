import {LOAD_GAMES_SUCCESS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_GAMES_SUCCESS:
            console.log('LOAD_GAMES_SUCCESS')
            state.games = payload;
            return;
        default: return state
    }
}