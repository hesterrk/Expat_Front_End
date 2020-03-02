import * as types from "../actions/actionTypes";

const initialValues = {
  message: "",
  location: ""
};

export const addJournalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.ADDING_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };

    case types.ADDING_CLEAR_FINISH:
      return initialValues;

    default:
      return state;
  }
};
