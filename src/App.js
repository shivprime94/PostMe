import React from 'react'
import './App.css'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'
import Container from './Container'
const App = () => {
  return (
    <Router>
      <Navbar />
      
      <main>
        <Switch>
          <Route path='/' exact>
            <Dashboard />
            <Container />
          </Route>
          <Route path='/about' exact>
            <SignIn />
          </Route>
          <Route path='/service' exact>
            <SignUp />
          </Route>

          <Redirect to='/' />
        </Switch>
      </main>
    </Router>
  )
}

export default App
