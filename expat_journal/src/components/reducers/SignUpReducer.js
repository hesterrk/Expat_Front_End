import * as types from "../actions/actionTypes";

const initialValues = {
  signUpInput: {
    email: "",
    password: "",
    confirm_password: "",
    first_name: "",
    last_name: ""
  },
  isLoading: false,
  sendUser: {}
};

export const signUpReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.REGISTER_INPUT_CHANGE:
      return {
        ...state,
        signUpInput: {
          ...state.signUpInput,
          [action.payload.inputName]: action.payload.inputValue
        }
      };

    case types.POST_REGISTER_START:
      return {
        ...state,
        isLoading: true
      };

    case types.POST_REGISTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sendUser: action.payload
      };

    case types.POST_CLEAR_REGISTER:
      return initialValues;

    default:
      return state;
  }
};
