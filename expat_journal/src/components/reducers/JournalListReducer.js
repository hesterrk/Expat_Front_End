import * as types from "../actions/actionTypes";

const initialValues = {
  journals: []
};

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

    default:
      return state;
  }
};
