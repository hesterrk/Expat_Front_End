import { combineReducers } from 'redux';
import { loginFormReducer } from './loginFormReducer';
import { signUpReducer } from './SignUpReducer';

export default combineReducers({
    loginFormReducer,
    signUpReducer

});