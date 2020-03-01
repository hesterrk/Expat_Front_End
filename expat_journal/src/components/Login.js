import React from "react";
import { changeLoginInput, postLogin } from "./actions/actionCreators";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


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
    })
    history.push('/journallist')

    //         //PUSH TO JOURNALLIST COMPONENT: dashboard --> list of users images
//         // history.push("/");
   
//     axios
//       .post("https://expat-journals.herokuapp.com/api/v1/auth/login", userLogin)
//       .then(res => {
//         localStorage.setItem("token", res.data.token);
//         console.log(res);

//       })
//       .catch(err => console.log(err));
  };

  return (
    <div>
      <h3> Please Login In Here: </h3>
      <form className="formContainer" onSubmit={onLogin}>
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
    email: state.loginFormReducer.loginInput.email,
    password: state.loginFormReducer.loginInput.password
  };
};

export default connect(mapStateToProps, { changeLoginInput, postLogin })(Login);
