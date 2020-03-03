import React from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  updateTheJournal,
  changeUpdateJournal
} from "./actions/actionCreators";
import { connect } from "react-redux";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #1488cc;
  border-radius: 3px;
`;

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #84e2f3;
  background: linear-gradient(to bottom, #0d82bd 5%, #0d3cbd 100%);
  background-color: #1488cc;
  border-radius: 6px;
  border: 1px solid #1488cc;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1488cc;
`;

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
          Message: <br></br>
          <Input
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
          Location: <br></br>
          <Input
            type="text"
            name="location"
            placeholder="Update location"
            value={props.location}
            onChange={updateChange}
          />
        </label>
        <br></br>

        <Button> Update </Button>
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
