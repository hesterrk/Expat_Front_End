import React from "react";
import { changeLoginInput, postLogin } from "./actions/actionCreators";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
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

function Login(props) {
  const history = useHistory();

  const handleChange = e => {
    props.changeLoginInput({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    props.postLogin({
      email: props.email,
      password: props.password
    });
    history.push("/journallist");
  };

  return (
    <div>
      <h3> Welcome Back </h3>
      <form className="formContainer" onSubmit={onLogin}>
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
        <Button>Log In</Button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    email: state.loginFormReducer.loginInput.email,
    password: state.loginFormReducer.loginInput.password
  };
};

export default connect(mapStateToProps, { changeLoginInput, postLogin })(Login);
