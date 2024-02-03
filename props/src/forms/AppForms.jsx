import React from 'react'
import InteractiveWelcome from './InteractiveWelcome'
import Login from './Login'
import UncontrolledForm from './UncontrolledForm'

function AppForms() {

    function onLogin(state) {
        console.log(state)
    }

  return (
    <div>
        <h1>Learning React.</h1>
        <h2> - Forms -</h2>
        <hr /> 
        <InteractiveWelcome/>
        <hr />
        <h2>Login Controlled</h2>
        <Login onLogin={onLogin}/>
        <hr />
        <h2>Login Uncontrolled</h2>
        <UncontrolledForm/>
    </div>
  )
}

export default AppForms