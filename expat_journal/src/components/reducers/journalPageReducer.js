import * as types from "../actions/actionTypes";

const initialValues = {
  journal: [],
  error: ""
};

export const journalPageReducer = (state = initialValues, action) => {
  switch (action.type) {
    case types.GET_ONEJOURNAL_START:
      return initialValues;

    case types.GET_ONEJOURNAL_SUCCESS:
      return {
        ...state,
        journal: action.payload
      };
    case types.GET_ONEJOURNAL_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};
