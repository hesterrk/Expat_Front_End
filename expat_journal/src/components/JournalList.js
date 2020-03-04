import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllJournals } from "./actions/actionCreators";
import styled from "styled-components";

const P = styled.p`
  font-size: 0.9rem;
  color: black;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  border: 2px solid #eef2f3;
  padding: 0.3rem;
  box-shadow: inset 0px 13px 10px #eef2f3;
  border-radius: 4px;
  width: 60%;
  margin: 0 auto;
  background: #dae2f8;
  margin-bottom: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

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
  margin-bottom: 10px;
`;

const SpecialButton = styled(Button)`
  font-weight: normal;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

function JournalList(props) {
  const history = useHistory();

  useEffect(() => {
    props.getAllJournals();
  }, []);

  const onLogout = e => {
    localStorage.removeItem("token");
    history.push("/");
  };

  return (
    <div>
      <h3> Your Feed </h3>
      <Link to="/addjournal">
        <Button>Add New Journal</Button>
      </Link>
      <br></br>
      {props.journals.map(item => (
        <Link
          to={`/journallist/${item.id}`}
          key={item.id}
          style={{ textDecoration: "none" }}
        >
          <Div>
            <P>
              {" "}
              Name: {item.first_name} {item.last_name}{" "}
            </P> 
            <P>📍: {item.location}</P>
            <P> Caption: {item.message}</P>
          </Div>
        </Link>
      ))}

      <SpecialButton onClick={onLogout}>Log out</SpecialButton>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    journals: state.journalListReducer.journals
  };
};

export default connect(mapStateToProps, { getAllJournals })(JournalList);
