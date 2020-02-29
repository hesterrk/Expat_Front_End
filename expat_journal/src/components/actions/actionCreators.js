import axios from "axios";
//use axios only for signup and Login
//need to import axiosWithAuth too!
import * as types from "./actionTypes";

//Login form change Handler function only
export function changeLoginInput({ inputName, inputValue }) {
  return {
    type: types.LOGIN_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}
