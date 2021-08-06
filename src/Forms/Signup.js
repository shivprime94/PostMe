import axios from "axios";
import React from "react";
import { SIGNUP_URL } from "../config/constants";
import "./Forms.css";

const Signup = (props) => {
  var signUpEmail = null;
  var signUpName = null;
  var signUpPhone = null;
  var signUpPassword = null;
  var signUpConfirmPassword = null;

  const updateEmail = (input) => {
    signUpEmail = input;
  };

  const updateName = (input) => {
    signUpName = input;
  };

  const updatePhone = (input) => {
    signUpPhone = input;
  };

  const updatePassword = (input) => {
    signUpPassword = input;
  };

  const updateConfirmPassword = (input) => {
    signUpConfirmPassword = input;
  };

  const validate = (event) => {
    event.preventDefault();
    var mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (signUpName != null) {
      if (signUpEmail != null && signUpEmail.match(mailFormat)) {
        if (signUpPassword != null && signUpPassword.length > 6) {
          if (signUpPassword === signUpConfirmPassword) {
            axios
              .post(SIGNUP_URL, {
                name: signUpName,
                email: signUpEmail,
                phone: signUpPhone,
                password: signUpPassword,
              })
              .then((response) => {
                props.notify("Created account " + signUpName);
                props.submit(response);
              })
              .catch((error) => {
                props.notify(error.response.data.msg);
              });
          } else {
            props.notify("Password and Confirmatory password donot match!");
          }
        } else {
          props.notify("Password too short!");
        }
      } else {
        props.notify("Email address not valid");
      }
    } else {
      props.notify("Invalid Name");
    }
  };

  return (
    <div className="signup">
      <div className="form-redirect">
        <div className="form-change-text">Already have an account ?</div>
        <button className="form-btn form-change-btn" onClick={props.change}>
          Sign In
        </button>
      </div>
      <div className="form-heading">Welcome to the Corridor!</div>
      <div className="form-subheading">Register your account</div>
      <form className="login-form">
        <div className="login-form-group">
          <div className="login-form-subgroup">
            <label className="input-label">Name</label>
            <br />
            <input
              onChange={(event) => updateName(event.target.value)}
              type="name"
              placeholder="Type your name here"
              className="input-field"
            ></input>
          </div>
          <br />
        </div>
        <br />
        <div className="login-form-group">
          <div className="login-form-subgroup">
            <label className="input-label">Email</label>
            <br />
            <input
              onChange={(event) => updateEmail(event.target.value)}
              type="email"
              placeholder="harry@example.com"
              className="input-field"
            ></input>
          </div>
          <div className="login-form-subgroup">
            <label className="input-label">Phone</label>
            <br />
            <input
              onChange={(event) => updatePhone(event.target.value)}
              type="tel"
              placeholder="Enter Phone Number"
              className="input-field"
            ></input>
          </div>
          <br />
        </div>
        <br />
        <div className="login-form-group">
          <div className="login-form-subgroup">
            <label className="input-label">Password</label>
            <br />
            <input
              onChange={(event) => updatePassword(event.target.value)}
              type="password"
              className="input-field"
              placeholder="6+ characters"
            ></input>
          </div>
          <div className="login-form-subgroup">
            <label className="input-label">Confirm Password</label>
            <br />
            <input
              onChange={(event) => updateConfirmPassword(event.target.value)}
              type="password"
              className="input-field"
              placeholder="6+ characters"
            ></input>
          </div>
          <br />
        </div>
        <br />
        <br />
        <div className="login-form-group">
          <button onClick={validate} className="form-btn form-submit-btn">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
