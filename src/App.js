import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import OTPBox from './components/OTPBox'
import Thankyou from './pages/Thankyou'
import './App.css'

function App() {
  return (
    <Router>
      <div className='App'>
        <h1>Welcome to React OTP Demo</h1>
        <Route exact path='/' component={OTPBox} />
        <Route exact path='/thankyou' component={Thankyou} />
      </div>
    </Router>
  )
}

export default App
