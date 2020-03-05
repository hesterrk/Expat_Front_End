import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllJournals } from "./actions/actionCreators";
import styled from "styled-components";
import img from "./sea.jpeg";

const BigDiv = styled.div`
  background-image: url(${img});
  padding-bottom: 30px;
  padding-top: 10px;
  min-height: 100vh;
`;
const P = styled.p`
  font-size: 0.9rem;
  color: black;
`;

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  border: 4px solid #eef2f3;
  padding: 0.3rem;
  box-shadow: inset 0px 13px 10px #eef2f3;
  border-radius: 4px;
  width: 60%;
  margin: 0 auto;
  background: #dae2f8;
  margin-bottom: 20px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.9);
  &:hover {
    background-color: #ece9e6;
  }
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
  margin-bottom: 20px;
`;

const SpecialButton = styled(Button)`
  font-weight: normal;
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const H2 = styled.h2`
  display: flex;
  flex-direction: flex-start;
  margin-left: 50px;
  margin-bottom: 10px;
  padding: 0.4rem;
  color: #4b6cb7;
  margin-top: 0px;
  text-shadow: 1px 0px 1px #ccc, 0px 1px 1px #eee, 2px 1px 1px #ccc,
    1px 2px 1px #eee, 3px 2px 1px #ccc, 2px 3px 1px #eee, 4px 3px 1px #ccc,
    3px 4px 1px #eee, 5px 4px 1px #ccc, 4px 5px 1px #eee, 6px 5px 1px #ccc,
    5px 6px 1px #eee, 7px 6px 1px #ccc;
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

  if (props.isLoading) {
    return <div>Getting All Posts...</div>;
  }

  return (
    <BigDiv>
      <H2> Expat Journal Feed </H2>
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
            <img alt={item.location} src={item.image_url} style={{width: '100%', height: '400px', objectFit: 'cover'}} />
            <P> Caption: {item.message}</P>
            <P>📍{item.location}</P>
          </Div>
        </Link>
      ))}

      <SpecialButton onClick={onLogout}>Log out</SpecialButton>
    </BigDiv>
  );
}

const mapStateToProps = state => {
  return {
    journals: state.journalListReducer.journals,
    isLoading: state.journalListReducer.isLoading
  };
};

export default connect(mapStateToProps, { getAllJournals })(JournalList);
