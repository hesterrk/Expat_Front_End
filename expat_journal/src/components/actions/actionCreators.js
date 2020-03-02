import { axiosWithAuth } from "../utils/axiosWithAuth";
// import axios from "axios";
import * as types from "./actionTypes";

//Login form change Handler function only
export function changeLoginInput({ inputName, inputValue }) {
  return {
    type: types.LOGIN_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export const postLogin = ({ email, password }) => dispatch => {
  dispatch({
    type: types.POST_LOGIN_START
  });

  axiosWithAuth()
    .post("api/v1/auth/login", {
      email,
      password
    })

    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.POST_LOGIN_SUCCESS
      });
    })
    .catch(err => {
      console.log(err);
    });
};

export function changeSignInput({ inputName, inputValue }) {
  return {
    type: types.REGISTER_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export const postSignUp = ({
  email,
  password,
  confirm_password,
  first_name,
  last_name
}) => dispatch => {
  dispatch({
    type: types.POST_REGISTER_START
  });

  axiosWithAuth()
    .post("api/v1/auth/signup", {
      email,
      password,
      confirm_password,
      first_name,
      last_name
    })

    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.POST_REGISTER_SUCCESS,
        payload: res.data
      });
      return true;
    })
    .catch(err => {
      console.log(err);
    });
};

export const getAllJournals = () => dispatch => {
  dispatch({
    type: types.GET_ALLJOURNALS_START
  });

  axiosWithAuth()
    .get("/api/v1/journals")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: types.GET_ALLJOURNALS_SUCCESS,
        payload: res.data.journals
      });
    })
    .catch(err => {
      console.log(err);
    });
};

//Individual Journal Page action creator

export const getOneJournal = (id) => dispatch => {
  dispatch({
    type: types.GET_ONEJOURNAL_START
  });

  axiosWithAuth()
    .get(`api/v1/journals/${id}`)
    .then(res => {
      console.log(res.data.journal);
      dispatch({
        type: types.GET_ONEJOURNAL_SUCCESS,
        //is an object 
        payload: res.data.journal
      });
    })
    .catch(err => {
      console.log(err);
    });
};
