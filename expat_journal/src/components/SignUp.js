import React from "react";
import { postSignUp, changeSignInput } from "./actions/actionCreators";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";




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
        })
        history.push('/login');

    };



  return (
    <div>
      <form className="formContainer" onSubmit={onSign}>
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
        <label>
          Confirm Password: <br></br>
          <input
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
          <input
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
          <input
            type="text"
            name="last_name"
            placeholder="Please enter last name"
            value={props.last_name}
            onChange={handleChange}
          />
        </label>
        <br></br>
        <button>Sign Up </button>
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
      last_name: state.signUpReducer.signUpInput.last_name

    };
  };
  
  export default connect(mapStateToProps, { changeSignInput, postSignUp })(SignUp);
  