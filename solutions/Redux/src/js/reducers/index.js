import {combineReducers} from 'redux';

import entityForm from './entityFormReducer'
import user from './userReducer'

export default combineReducers({
    entityForm,
    user
})