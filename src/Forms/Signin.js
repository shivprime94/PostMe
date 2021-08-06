import React from 'react'
import axios from 'axios'
import './Forms.css'
import { SIGNIN_URL } from '../config/constants'

const Signin = (props) => {
  var signInEmail = null
  var signInPassword = null

  const updateEmail = (input) => {
    signInEmail = input
  }

  const updatePassword = (input) => {
    signInPassword = input
  }

  const validate = (event) => {
    event.preventDefault()
    var mailFormat =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    if (signInEmail != null && signInEmail.match(mailFormat)) {
      if (signInPassword != null && signInPassword.length > 6) {
        axios
          .post(SIGNIN_URL, {
            email: signInEmail,
            password: signInPassword,
          })
          .then((response) => {
            props.submit(response.data.token)
          })
          .catch((error) => {
            props.notify(error.response.data.msg)
          })
      } else {
        props.notify('Password too short!')
      }
    } else {
      props.notify('Email address not valid')
    }
    console.log(signInEmail)
  }

  return (
    <div className='signup'>
      <div className='form-redirect'>
        <div className='form-change-text'>Don't an account ?</div>
        <button className='form-btn form-change-btn' onClick={props.change}>
          Sign Up
        </button>
      </div>
      <div className='form-heading'>Welcome back to PostMe!</div>
      <div className='form-subheading'>Log back in</div>
      <form className='login-form'>
        <div className='login-form-group'>
          <div className='login-form-subgroup'>
            <label className='input-label'>Email</label>
            <br />
            <input
              onChange={(event) => updateEmail(event.target.value)}
              type='email'
              placeholder='xyz@example.com'
              className='input-field'
            ></input>
          </div>
          <br />
        </div>
        <br />
        <div className='login-form-group'>
          <div className='login-form-subgroup'>
            <label className='input-label'>Password</label>
            <br />
            <input
              onChange={(event) => updatePassword(event.target.value)}
              type='password'
              className='input-field'
              placeholder='More than 6 characters'
            ></input>
          </div>
          <br />
        </div>
        <br />
        <br />
        <div className='login-form-group'>
          <button
            onClick={(event) => validate(event)}
            className='form-btn form-submit-btn'
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  )
}

export default Signin
