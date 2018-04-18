import {combineReducers} from 'redux';

import entityFormReducer from './entityFormReducer'
import user from './userReducer'

export default combineReducers({
    entityFormReducer,
    user
})