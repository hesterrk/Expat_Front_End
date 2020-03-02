import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getOneJournal, deleteJournal } from "./actions/actionCreators";


function JournalPage(props) {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    props.getOneJournal(id);
  }, [id]);

  function deletePost(id) {
    props.deleteJournal(id)
    history.push('/journallist')

  }

  // props.edit action creator functions

  return (
    <div>
      {/* //BUTTONS TO DELETE AND EDIT  */}
      {/* <button onClick={() => props.deleteJournal(id)}>Delete Post</button> */}
      <button onClick={() => deletePost(id)}>Delete Post</button>

      <h3> Your Post: </h3>
      <p>First Name: {props.journal.first_name}</p>
      <p>Last Name:{props.journal.last_name}</p>
      <p> Location: {props.journal.location}</p>
      <p> Message: {props.journal.message}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    journal: state.journalPageReducer.journal
  };
};

export default connect(mapStateToProps, { getOneJournal, deleteJournal })(JournalPage);
