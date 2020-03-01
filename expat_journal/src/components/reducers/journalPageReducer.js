import * as types from "../actions/actionTypes";

const initialValues = {
  journal: []
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

    default:
      return state;
  }
};
