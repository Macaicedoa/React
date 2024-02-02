import { useState } from "react"
import { Welcome } from "../Welcome"

function InteractiveWelcome() {
    const [userName, setUserName]=useState('User')

    function handleUsernameInputChange(event) {
      const value = (event.target.value)
      setUserName(value)
    }
  
    return (
      <div>
        <label htmlFor="">Your name: </label>
        <input value={userName} onChange={handleUsernameInputChange}/>
        <hr />
        <Welcome name={userName}/>
      </div>
    )
}

export default InteractiveWelcome