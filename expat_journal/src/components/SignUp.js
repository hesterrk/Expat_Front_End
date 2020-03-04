import React from "react";
import { postSignUp, changeSignInput } from "./actions/actionCreators";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Loader from "react-loader-spinner";

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

function SignUp(props) {
  const history = useHistory();

  const handleChange = e => {
    props.changeSignInput({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onSign = e => {
    e.preventDefault();
    props.postSignUp({
      email: props.email,
      password: props.password,
      confirm_password: props.confirm_password,
      first_name: props.first_name,
      last_name: props.last_name
    });
    history.push("/login");
  };

  return (
    <div>
      {props.isLoading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={300}
        />
      )}
      <h3> Sign Up in a few simple steps... </h3>
      <br></br>
      <form className="formContainer" onSubmit={onSign}>
        <label>
          Email: <br></br>
          <Input
            type="text"
            name="email"
            placeholder="Please enter email"
            value={props.email}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Password: <br></br>
          <Input
            type="password"
            name="password"
            placeholder="Please enter Password"
            value={props.password}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Confirm Password: <br></br>
          <Input
            type="password"
            name="confirm_password"
            placeholder="Please confirm Password"
            value={props.confirm_password}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          First Name: <br></br>
          <Input
            type="text"
            name="first_name"
            placeholder="Please enter first name"
            value={props.first_name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <label>
          Last Name: <br></br>
          <Input
            type="text"
            name="last_name"
            placeholder="Please enter last name"
            value={props.last_name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <Button>Sign Up </Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    email: state.signUpReducer.signUpInput.email,
    password: state.signUpReducer.signUpInput.password,
    confirm_password: state.signUpReducer.signUpInput.confirm_password,
    first_name: state.signUpReducer.signUpInput.first_name,
    last_name: state.signUpReducer.signUpInput.last_name,
    isLoading: state.signUpReducer.isLoading
  };
};

export default connect(mapStateToProps, { changeSignInput, postSignUp })(
  SignUp
);
