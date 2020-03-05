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
      }

    case types.GET_ALLJOURNALS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: action.payload
      };

      case types.GET_ALLJOURNALS_ERROR : 
      return {
      ...state,
      error: action.payload
      };

    case types.POST_JOURNAL_START:
      return {
        ...state,
        isLoading: true
      }

    case types.POST_JOURNAL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        journals: [...state.journals, action.payload]
      };

      case types.POST_JOURNAL_ERROR : 
            return {
            ...state,
            error: action.payload
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
        journals: [...state.journals, action.payload]
      };

      case types.DELETING_JOURNAL_ERROR:
          return {
            ...state,
            error: action.payload
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
        journals: [...state.journals, action.payload]
      };

    case types.EDIT_JOURNAL_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
