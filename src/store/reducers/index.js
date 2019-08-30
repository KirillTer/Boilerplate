import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'
import produce from 'immer';

import mainReducer from './mainReducer';
import signinReducer from './signinReducer';
import singupReducer from './singupReducer';

const curriedMainReducer = produce(mainReducer)
const curriedSingInReducer = produce(signinReducer)
const curriedSingUpReducer = produce(singupReducer)

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    curriedMainReducer,
    curriedSingInReducer,
    curriedSingUpReducer
})