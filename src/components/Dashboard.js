import React from 'react'
const Dashboard = () => {
  return (
    <React.Fragment>
      <h1>My Posts</h1>
      <div className='Inputdiv'>
        <input type='text' className='input' placeholder='Make Your Post...' />
        <button className='add'>
          <i className='fas fa-plus'></i>
        </button>
        {/* <button type='button' className='btn btn-dark' onclick='dark()'>
        Dark
      </button>
      <button type='button' className='btn btn-light' onclick='light()'>
        Light
      </button> */}
      </div>
      <div class='container'></div>
    </React.Fragment>
  )
}
export default Dashboard
