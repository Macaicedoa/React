import React from 'react'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'

function AppForms() {
  return (
    <div>
        <h1>Learning React.</h1>
        <h2> - Forms -</h2>
        <hr /> 
        <InteractiveWelcome/>
        <hr />
        <h2>Login</h2>
        <Login/>
    </div>
  )
}

export default AppForms