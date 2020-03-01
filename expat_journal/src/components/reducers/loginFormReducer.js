import * as types from "../actions/actionTypes";

const initialValues = {
  loginInput: {
    email: "",
    password: ""
  },
  // userLogin: [],
  isLoading: false
};

//Functionality for Login form

export const loginFormReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.LOGIN_INPUT_CHANGE:
      return {
        ...state,
        loginInput: {
          ...state.loginInput,
          [action.payload.inputName]: action.payload.inputValue
        }
      };

    case types.POST_LOGIN_START:
      return {
        ...state,
        isLoading: true
      };

    case types.POST_LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false
        // userLogin: action.payload
      };

    case types.POST_CLEAR_LOGIN:
      return initialValues;

    default:
      return state;
  }
};
