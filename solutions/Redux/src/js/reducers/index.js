import {combineReducers} from 'redux';

import entityForms from './entityFormReducer'
import user from './userReducer'

export default combineReducers({
    entityForms,
    user
})