import React from 'react';

function UpdateJournal() {

    return (
        <div>
            <h3>Update Your Post</h3>
            <form>
        <label>
          {" "}
          Message:
          <input
            type="text"
            name="message"
            placeholder="Update message"
            // value={}
            // onChange={onChange}
          />
        </label>
        <br></br>
        <label>
          {" "}
          Location:
          <input
            type="text"
            name="location"
            placeholder="Update location"
            // value={}
            // onChange={onChange}
          />
        </label>

        <button> Update </button>
      </form>

        </div>
    )
}

export default UpdateJournal;


//link on journalPage component to come here 
//create action types, add action types to reducer (journallist reducer): x2: start, success ALSO need an input change one (new action type, but add it to addJournalReducer!!!)
//creat edit action function creator with axios: 'api/v1/journals/${id}': message, location 
//connect to redux store and link up with reducer state and action creator function
//finish form: onchange, onsubmit and values 
