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

    case types.POST_JOURNAL_SUCCESS:
      return initialValues;

    default:
      return state;
  }
};
