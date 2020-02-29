import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { changeLoginInput } from "./actions/actionCreators";
import { connect } from "react-redux";

function Login(props) {
  const history = useHistory();

  const handleChange = e => {
    props.changeLoginInput({
      inputName: e.target.name,
      inputValue: e.target.value
    });
  };


//   const onLogin = e => {
//     e.preventDefault();
//     axios
//       .post("https://expat-journals.herokuapp.com/api/v1/auth/login", userLogin)
//       .then(res => {
//         localStorage.setItem("token", res.data.token);
//         console.log(res);
//         //PUSH TO JOURNALLIST COMPONENT: dashboard --> list of users images
//         // history.push("/");
//       })
//       .catch(err => console.log(err));
//   };

  return (
    <div>
      <h3> Please Login In Here: </h3>
      <form className="formContainer">
        <label>
          Email: <br></br>
          <input
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
          <input
            type="password"
            name="password"
            placeholder="Please enter Password"
            value={props.password}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button>Log In</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      //CHANGE THIS TO REFLECT UPDATED STATE
    email: state.loginFormReducer.loginInput.email,
    password: state.loginFormReducer.loginInput.password
  };
};

export default connect(mapStateToProps, { changeLoginInput })(Login);
