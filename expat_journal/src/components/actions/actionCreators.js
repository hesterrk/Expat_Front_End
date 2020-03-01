import { axiosWithAuth } from '../utils/axiosWithAuth'
import * as types from "./actionTypes";




//Login form change Handler function only
export function changeLoginInput({ inputName, inputValue }) {
  return {
    type: types.LOGIN_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export const postLogin = ({email, password}) => dispatch => {

  dispatch({
    type: types.POST_LOGIN_START
  })


  axiosWithAuth()
  .post('api/v1/auth/login', {
    email,
    password
  })

    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        type: types.POST_LOGIN_SUCCESS
      });
     
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: types.POST_LOGIN_ERROR, payload: err.response
      })
    })
 

}


export function changeSignInput({ inputName, inputValue }) {
  return {
    type: types.REGISTER_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}


export const postSignUp = ({email, password, confirm_password, first_name, last_name}) => dispatch => {
  dispatch({
    type: types.POST_REGISTER_START
  })


  axiosWithAuth()
  .post('api/v1/auth/signup', {
    email,
    password,
    confirm_password,
    first_name,
    last_name
  })

    .then(res => {
      localStorage.setItem('token', res.data.token);
      dispatch({
        
        type: types.POST_REGISTER_SUCCESS, payload: res.data
      });
      return true
    })
    .catch(err => {
      console.log(err)
      dispatch({
        type: types.POST_REGISTER_ERROR, payload: err.response
      })
    })
 

}
