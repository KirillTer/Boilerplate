import {LOAD_PLAYERS_SUCCESS, SEARCH_PLAYERS} from '../actionTypes'

const initialState = {}

export default (state = initialState, {type, payload}) => {
    switch (type) {
        case LOAD_PLAYERS_SUCCESS:
            console.log('LOAD_PLAYERS_SUCCESS')
            state.players = payload;
            return;
        case SEARCH_PLAYERS:
            console.log('SEARCH_PLAYERS')
            state.playersSearch = payload;
            return;
        default: return state
    }
}