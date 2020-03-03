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
box-shadow: inset 0px 1px 0px 0px #84e2f3;
  background: linear-gradient(to bottom, #0d82bd 5%, #0d3cbd 100%);
  background-color: #1488cc;
  border-radius: 6px;
  border: 1px solid #1488cc;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1488cc;
`;

const SmallButton = styled(Button) `
display: flex;
justify-content: center;
width: 10%;
font-weight: normal;


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
      <Button onClick={() => deletePost(id)}>Delete Post</Button>
      {/* <button onClick={goToEdit}>Edit</button> */}
      <Link to={"/journallist"}>
        <Button>Back to Journal List</Button>
      </Link>

      <Div>
        <SmallButton onClick={goToEdit}>Edit</SmallButton>
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
