import React from 'react'

const SignUp = () => {
  return (
    <div>
      <section className='signup'>
        <div className='container mt-5'>
          <div className='signup-form'>
            <h1>Sign Up</h1>
            <form action="noaction.php">
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Name"/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Email Id"/>
            </div>
            <div className="form-group">
                <input type="text" name="" placeholder="Enter your Phone Number"/>
            </div>
            <div className="form-group">
                <input type="password" name="" placeholder="Enter password"/>
            </div>
            <div className="form-group">
                <input type="password" name="" placeholder="Confirm password"/>
            </div>
            
            <button className="btn">Sign Up</button>
        </form>
          </div>
        </div>
      </section>
    </div>
  )
}
export default SignUp
