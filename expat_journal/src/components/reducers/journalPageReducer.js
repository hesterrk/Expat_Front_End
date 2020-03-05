import * as types from "../actions/actionTypes";

const initialValues = {
  journal: [],
  error: "",
  isLoading: false
};

export const journalPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_ONEJOURNAL_START:
      return {
        ...state,
        isLoading: true 
      }

    case types.GET_ONEJOURNAL_SUCCESS:
      return {
        ...state,
        journal: action.payload,
        isLoading: false
      };
    case types.GET_ONEJOURNAL_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };

    default:
      return state;
  }
};
