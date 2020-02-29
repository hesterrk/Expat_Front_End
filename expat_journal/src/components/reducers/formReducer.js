import * as types from "../actions/actionTypes";

const initialValues = {
  email: "",
  password: ""
};

//Change Handler for forms reducer
//ADD in: POST_SIGNUP_SUCCESS to return initial values and all other forms!!!! as can reuse this reducer function in all of the change handler forms

export const formReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.INPUT_CHANGE:
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
