import React from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";

//Properties from data: caption, first_name, image_url, last_name, location, message

//in component: in useEffect:
// useEffect(()=> {
// props.getOneJournal(id)

// })

function JournalPage(props) {
  return (
    <div>
      <h3> Your Post: </h3>
    </div>
  );
}

export default JournalPage;
