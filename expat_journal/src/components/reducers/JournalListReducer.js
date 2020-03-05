import * as types from "../actions/actionTypes";

const initialValues = {
  journals: [],
  error: "",
  isLoading: false
};

//GETTING ALL JOURNALS AND ADDING NEW JOURNAL reducer and DELETING

export const journalListReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_ALLJOURNALS_START:
      return {
        ...state,
        isLoading: true
      };

    case types.GET_ALLJOURNALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: action.payload
      };

    case types.GET_ALLJOURNALS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case types.POST_JOURNAL_START:
      return {
        ...state,
        isLoading: true
      };

    case types.POST_JOURNAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: [...state.journals, action.payload]
      };

    case types.POST_JOURNAL_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case types.DELETING_JOURNAL_START:
      return {
        ...state,
        isLoading: true
      };

    case types.DELETING_JOURNAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: state.journals.filter(
          jour => jour.id !== Number(action.payload)
        )
      };

    case types.DELETING_JOURNAL_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    case types.EDIT_JOURNAL_START:
      return {
        ...state,
        isLoading: true
      };

    case types.EDIT_JOURNAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: state.journals.map(journal =>
          journal.id === action.payload.id ? action.payload : journal
        )
      };

    case types.EDIT_JOURNAL_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};
