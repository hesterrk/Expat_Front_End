import React from "react";
import { useHistory } from "react-router-dom";
import { postNewJournal, changeAddJournal } from "./actions/actionCreators";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";

const Input = styled.input`
  padding: 0.5rem;
  width: 50%;
  margin-top: 10px;
  margin-bottom: 10px;
  border: 1px solid #1488cc;
  border-radius: 3px;
`;

const Button = styled.button`
  box-shadow: inset 0px 1px 0px 0px #84e2f3;
  background: linear-gradient(to bottom, #0d82bd 5%, #0d3cbd 100%);
  background-color: #1488cc;
  border-radius: 6px;
  border: 1px solid #1488cc;
  color: #ffffff;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #1488cc;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  object-fit: contain;
`

function AddJournal(props) {
  const history = useHistory();

  const formElement = React.createRef();
  const [uploading, setUploading] = React.useState(false);
  const [image_url, setImage_url] = React.useState('');
  
  const upload = e => {
    e.persist();
    setUploading(true)
    const token = localStorage.getItem('token')
    axios({
      method: "post",
      url: "https://expat-journals.herokuapp.com/api/v1/journals/upload",
      headers: {
        "Content-Type": "application/form-data",
        Authorization: token
      },
      data: new FormData(formElement.current)
    })
      .then(res => {
        setImage_url(res.data.image_url)
        setUploading(false)
      })
      .catch(err => {
        console.log(err)
        setUploading(false)
      })
  };

  const onChange = e => {
    props.changeAddJournal({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    props.postNewJournal({
      message: props.message,
      location: props.location,
      image_url
    });
    history.push("/journallist");
  };

  if (props.isLoading) {
    return <div>Adding New Post...</div>;
  }

  return (
    <div>
      <h3> Add Your New Post </h3>
      <form ref={formElement}>
        <input name="image_url" type="file" onChange={upload} />
      </form>
      {uploading && (<p>uploading...</p>)}
      {image_url && <Img src={image_url} alt='Image url' />}

      <form onSubmit={onSubmit}>
        <label>
          {" "}
          Write a caption... <br></br>
          <Input
            type="text"
            name="message"
            placeholder="Enter message"
            value={props.message}
            onChange={onChange}
          />
        </label>
        <br></br>
        <label>
          {" "}
          Add Location: <br></br>
          <Input
            type="text"
            name="location"
            placeholder="Enter location"
            value={props.location}
            onChange={onChange}
          />
        </label>
        <br></br>
        <Button> Post </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    message: state.addJournalReducer.message,
    location: state.addJournalReducer.location,
    isLoading: state.journalListReducer.isLoading,
    error: state.journalListReducer.error
  };
};

export default connect(mapStateToProps, { postNewJournal, changeAddJournal })(
  AddJournal
);
