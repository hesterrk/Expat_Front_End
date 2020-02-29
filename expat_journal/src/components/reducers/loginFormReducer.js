import * as types from "../actions/actionTypes";

const initialValues = {
  email: "",
  password: ""
};

//Change Handler for Login form

export const loginFormReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.LOGIN_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };

    case types.POST_LOGIN_SUCCESS:
      return initialValues;

    default:
      return state;
  }
};
