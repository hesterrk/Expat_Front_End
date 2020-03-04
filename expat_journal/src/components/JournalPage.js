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
  border: 2px solid #eef2f3;
  padding: 0.3rem;
  align-items: center;
  border-radius: 4px;
  background: #dae2f8;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  width: 70%;
  margin: 20px auto;
`;

const Button = styled.button`
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
  margin-bottom: 5px;
  margin-top: 5px;
`;

const SmallButton = styled(Button)`
  display: flex;
  justify-content: center;
  width: 10%;
  font-weight: normal;
`;

const Span = styled.span`
  display: flex;
  flex-direction: flex-start;
  margin-left: 50px;
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
      <Span>
        <Link to={"/journallist"}>
          <Button>Back</Button>
        </Link>
      </Span>

      <Div>
        <p>
          {" "}
          Name: {props.journal.first_name} {props.journal.last_name}
        </p>
        <p> 📍: {props.journal.location}</p>
        <p> Caption: {props.journal.message}</p>
        <SmallButton onClick={goToEdit}>Edit</SmallButton>
        <SmallButton onClick={() => deletePost(id)}>Delete</SmallButton>
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
