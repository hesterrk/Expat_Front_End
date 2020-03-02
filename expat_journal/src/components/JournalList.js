import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAllJournals } from "./actions/actionCreators";

function JournalList(props) {
  const history = useHistory();

  useEffect(() => {
    props.getAllJournals();
  }, []);

  const onLogout = e => {
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <div>
      <h4> Your Page of All Your Journal Posts </h4>
      <Link to="/addjournal">
        <button>Add New Journal</button>
      </Link>
      {props.journals.map(item => (
        <Link to={`/journallist/${item.id}`} key={item.id}>
          <div>
            <p>First Name: {item.first_name}</p>
            <p> Last Name: {item.last_name}</p>
            <p> Location: {item.location}</p>
            <p> Message: {item.message}</p>
          </div>
        </Link>
      ))}

      <button onClick={onLogout}>Log out</button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    journals: state.journalListReducer.journals
  };
};

export default connect(mapStateToProps, { getAllJournals })(JournalList);
