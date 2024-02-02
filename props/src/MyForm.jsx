import { useState } from "react"

function MyForm() {
  const [username, setUserName]=useState('')

  function handleUsernameInputChange(event) {
    const value = (event.target.value)
    setUserName(value)
  }

  return (
    <div>
        <input value={username} onChange={handleUsernameInputChange} />
    </div>
  )
}

export default MyForm