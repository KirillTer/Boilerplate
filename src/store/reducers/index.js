import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { reducer as form } from 'redux-form'

import main from './main';

export default (history) => combineReducers({
    router: connectRouter(history),
    form,
    main
})