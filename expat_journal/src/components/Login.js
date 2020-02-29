import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [userLogin, setUserLogin] = useState(initialValues);

  const history = useHistory();

  const handleChange = e => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value
    });
  };

  const onLogin = e => {
    e.preventDefault();
    axios
      .post("https://expat-journals.herokuapp.com/api/v1/auth/login", userLogin)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        console.log(res);
        //PUSH TO JOURNALLIST COMPONENT: dashboard --> list of users images
        // history.push("/");
      })
      .catch(err => console.log(err));
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
            value={userLogin.email}
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
            value={userLogin.password}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;

const initialValues = {
  email: "",
  password: ""
};
