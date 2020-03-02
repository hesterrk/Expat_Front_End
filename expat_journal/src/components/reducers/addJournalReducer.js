import * as types from "../actions/actionTypes";

const initialValues = {
  message: "",
  location: ""
};

//Add Journal form Reducer and (Edit Journal?)


export const addJournalReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.ADDING_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.inputName]: action.payload.inputValue
      };

    case types.POST_JOURNAL_SUCCESS:
      return initialValues;

      //new: editing

      case types.EDITING_JOURNAL_CHANGE :
        return {
          ...state,
          [action.payload.inputName]: action.payload.inputValue
        };

        //ADD IN edit_journal_success: initialValues to clear!

    default:
      return state;
  }
};
