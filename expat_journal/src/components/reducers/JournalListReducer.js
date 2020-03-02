import * as types from "../actions/actionTypes";

const initialValues = {
  journals: []
};

//GETTING ALL JOURNALS AND ADDING NEW JOURNAL reducer and DELETING

export const journalListReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_ALLJOURNALS_START:
      return initialValues;

    case types.GET_ALLJOURNALS_SUCCESS:
      {
        console.log(action.payload);
      }

      return {
        ...state,
        journals: action.payload
      };

    case types.POST_JOURNAL_START:
      return initialValues;

    case types.POST_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload]
      };

    case types.DELETING_JOURNAL_START:
      return {
        ...state
      };

    case types.DELETING_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload]
      };

    case types.EDIT_JOURNAL_START:
      return {
        ...state
      };

    case types.EDIT_JOURNAL_SUCCESS:
      return {
        ...state,
        journals: [...state.journals, action.payload]
      };

    default:
      return state;
  }
};
