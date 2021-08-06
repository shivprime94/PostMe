import React from 'react'

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <div className='form'>
      <form action="noaction.php">
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Email Id"/>
            </div>
            <div className="form-group">
                <input type="password" name="" placeholder="Enter password"/>
            </div>
            <button className="btn">Sign In</button>
        </form>
        {/* <label htmlFor=''>Name</label>
        <input type='text' placeholder='Name' /> */}
      </div>
    </div>
  )
}
export default SignIn
