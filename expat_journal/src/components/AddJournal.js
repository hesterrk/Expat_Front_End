import React from "react";
import { useHistory } from "react-router-dom";
import { postNewJournal, changeAddJournal } from "./actions/actionCreators";
import { connect } from "react-redux";

function AddJournal(props) {
  const history = useHistory();

  const onChange = e => {
    props.changeAddJournal({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.postNewJournal({
      message: props.message,
      location: props.location
    });
    history.push('/journallist')
  };

  return (
    <div>
      <h3> Add Your New Post </h3>
      <form onSubmit={onSubmit}>
        <label>
          {" "}
          Message:
          <input
            type="text"
            name="message"
            placeholder="Enter message"
            value={props.message}
            onChange={onChange}
          />
        </label>
        <br></br>
        <label>
          {" "}
          Location:
          <input
            type="text"
            name="location"
            placeholder="Enter location"
            value={props.location}
            onChange={onChange}
          />
        </label>

        <button> Post </button>
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

export default connect(mapStateToProps, { postNewJournal, changeAddJournal })(
  AddJournal
);
