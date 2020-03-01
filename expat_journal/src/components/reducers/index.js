import { combineReducers } from 'redux';
import { loginFormReducer } from './loginFormReducer';
import { signUpReducer } from './SignUpReducer';
import { journalListReducer } from './JournalListReducer';

export default combineReducers({
    loginFormReducer,
    signUpReducer,
    journalListReducer

});