import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { getAllJournals } from './actions/actionCreators';

//import all redux, connect function

//Need button taking to AddJournal so can add new post!!!!

function JournalList(props) {

    const history = useHistory();

    //useEffect to call my props.actionfunction in 

    useEffect(() => {
        props.getAllJournals()
    }, [])

    const onLogout = e => {
        localStorage.removeItem("token");
        history.push("/login");
      };

    return (
        <div>
            <h4> Your Page of All Your Journal Posts </h4>
            {props.journals.map(item => (
                
                <div>
                    <p>First Name: {item.first_name}</p>
                    <p> Last Name: {item.last_name}</p>
                    <p> Location: {item.location}</p>
                    <p> Message: {item.message}</p>
                </div>

            ))}


            {/* //Properties from data: caption, first_name, image_url, last_name, location, message */}
            {/* //Link to indivdual posts for JournalPage */}
            {/* //REACT ROUTER 2 GUIDED: ITEM LIST style */}

            <button onClick={onLogout}>Log out</button>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        journals: state.journalListReducer.journals
    };
  };

export default connect(mapStateToProps, { getAllJournals })(JournalList);


