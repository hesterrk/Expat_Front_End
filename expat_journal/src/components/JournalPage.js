import React, { useEffect } from "react";
import { useHistory, useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getOneJournal, deleteJournal } from "./actions/actionCreators";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  border: 1px solid #eef2f3;
  padding: 0.3rem;
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 20px;
  box-shadow: inset 0px 13px 10px #eef2f3;
`;

const Button = styled.button `
display: flex;
justify-content: center;
width: 10%;

`;

function JournalPage(props) {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    props.getOneJournal(id);
  }, [id]);

  function deletePost(id) {
    props.deleteJournal(id);
    history.go(-1);
  }

  function goToEdit(e) {
    e.preventDefault();
    history.push(`/updatejournal/${id}`);
  }

  return (
    <div>
      <button onClick={() => deletePost(id)}>Delete Post</button>
      {/* <button onClick={goToEdit}>Edit</button> */}
      <Link to={"/journallist"}>
        <button>Back to Journal List</button>
      </Link>

      <Div>
        <Button onClick={goToEdit}>Edit</Button>
        <p>
          {" "}
          Name: {props.journal.first_name} {props.journal.last_name}
        </p>
        <p> 📍: {props.journal.location}</p>
        <p> Caption: {props.journal.message}</p>
      </Div>
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
