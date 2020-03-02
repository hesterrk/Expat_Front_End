import React, { useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneJournal, deleteJournal } from "./actions/actionCreators";

function JournalPage(props) {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    props.getOneJournal(id);
  }, [id]);

  function deletePost(id) {
    props.deleteJournal(id);
    history.go(-1);
    // history.push("/journallist");
  }

  function goToEdit(e) {
    e.preventDefault();
    history.push(`/updatejournal/${id}`);
  }

  return (
    <div>
      <button onClick={() => deletePost(id)}>Delete Post</button>
      <button onClick={goToEdit}>Edit</button>
      <Link to={"/journallist"}>
        <button>Back to Journal List</button>
      </Link>

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

export default connect(mapStateToProps, { getOneJournal, deleteJournal })(
  JournalPage
);
