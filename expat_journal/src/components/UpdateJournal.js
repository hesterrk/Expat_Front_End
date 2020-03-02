import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  updateTheJournal,
  changeUpdateJournal
} from "./actions/actionCreators";
import { connect } from "react-redux";

function UpdateJournal(props) {
  const history = useHistory();
  const { id } = useParams();

  const updateChange = e => {
    props.changeUpdateJournal({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.updateTheJournal({
      message: props.message,
      location: props.location,
      id
    });
    history.go(-1);
  };

  return (
    <div>
      <h3>Update Your Post</h3>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          Message:
          <input
            type="text"
            name="message"
            placeholder="Update message"
            value={props.message}
            onChange={updateChange}
          />
        </label>
        <br></br>
        <label>
          {" "}
          Location:
          <input
            type="text"
            name="location"
            placeholder="Update location"
            value={props.location}
            onChange={updateChange}
          />
        </label>

        <button> Update </button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    message: state.addJournalReducer.message,
    location: state.addJournalReducer.location
  };
};

export default connect(mapStateToProps, {
  updateTheJournal,
  changeUpdateJournal
})(UpdateJournal);
