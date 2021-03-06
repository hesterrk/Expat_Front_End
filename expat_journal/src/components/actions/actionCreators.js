import { axiosWithAuth } from "../utils/axiosWithAuth";
import * as types from "./actionTypes";

//Login form change Handler function only
export function changeLoginInput({ inputName, inputValue }) {
  return {
    type: types.LOGIN_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export const postLogin = ({ email, password }) => dispatch => {
  dispatch({
    type: types.POST_LOGIN_START
  });

  axiosWithAuth()
    .post("api/v1/auth/login", {
      email,
      password
    })

    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.POST_LOGIN_SUCCESS
      });
    })
    .catch(err => {
      dispatch({
        type: types.POST_LOGIN_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};

export function changeSignInput({ inputName, inputValue }) {
  return {
    type: types.REGISTER_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

export const postSignUp = ({
  email,
  password,
  confirm_password,
  first_name,
  last_name
}) => dispatch => {
  dispatch({
    type: types.POST_REGISTER_START
  });

  axiosWithAuth()
    .post("api/v1/auth/signup", {
      email,
      password,
      confirm_password,
      first_name,
      last_name
    })

    .then(res => {
      localStorage.setItem("token", res.data.token);
      dispatch({
        type: types.POST_REGISTER_SUCCESS,
        payload: res.data
      });
      // return true;
    })
    .catch(err => {
      dispatch({
        type: types.POST_REGISTER_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};

export const getAllJournals = () => dispatch => {
  dispatch({
    type: types.GET_ALLJOURNALS_START
  });

  axiosWithAuth()
    .get("/api/v1/journals")
    .then(res => {
      // console.log(res.data);
      dispatch({
        type: types.GET_ALLJOURNALS_SUCCESS,
        payload: res.data.journals
      });
    })
    .catch(err => {
      dispatch({
        type: types.GET_ALLJOURNALS_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};

//Individual Journal Page action creator

export const getOneJournal = id => dispatch => {
  dispatch({
    type: types.GET_ONEJOURNAL_START
  });

  axiosWithAuth()
    .get(`api/v1/journals/${id}`)
    .then(res => {
      console.log(res.data.journal);
      dispatch({
        type: types.GET_ONEJOURNAL_SUCCESS,
        payload: res.data.journal
      });
    })
    .catch(err => {
      dispatch({
        type: types.GET_ONEJOURNAL_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};

//Posting: adding new Journal

export const postNewJournal = ({ message, location, image_url }) => dispatch => {
  dispatch({
    type: types.POST_JOURNAL_START
  });

  axiosWithAuth()
    .post("api/v1/journals", {
      message,
      location,
      image_url
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.POST_JOURNAL_SUCCESS,
        payload: res.data.journal
      });
    })
    .catch(err => {
      dispatch({
        type: types.POST_JOURNAL_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};

//INPUT CHANGE FOR ADDING NEW
export function changeAddJournal({ inputName, inputValue }) {
  return {
    type: types.ADDING_INPUT_CHANGE,
    payload: { inputName, inputValue }
  };
}

//DELETING a journal: from journal page

export const deleteJournal = id => dispatch => {
  dispatch({
    type: types.DELETING_JOURNAL_START
  });
  axiosWithAuth()
    .delete(`api/v1/journals/${id}`)
    .then(res => {
      console.log(res, "deleted");
      dispatch({
        type: types.DELETING_JOURNAL_SUCCESS,
        payload: id
      });
    })
    .catch(err => {
      dispatch({
        type: types.DELETING_JOURNAL_ERROR,
        payload: err.response
      });
      console.log(err);
    });
};

//New: input CHANGE FOR updating
export function changeUpdateJournal({ inputName, inputValue }) {
  return {
    type: types.EDITING_JOURNAL_CHANGE,
    payload: { inputName, inputValue }
  };
}

//NEW: update journal

export const updateTheJournal = ({ id, message, location }) => dispatch => {
  dispatch({
    type: types.EDIT_JOURNAL_START
  });
  axiosWithAuth()
    .put(`api/v1/journals/${id}`, {
      message,
      location
    })
    .then(res => {
      console.log(res.data);
      dispatch({
        type: types.EDIT_JOURNAL_SUCCESS,
        payload: res.data.journal
      });
    })
    .catch(err => {
      dispatch({
        type: types.EDIT_JOURNAL_ERROR,
        payload: err.response
      });

      console.log(err);
    });
};
