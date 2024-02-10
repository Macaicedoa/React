import { useState } from "react"
import GithubUser from "./GithubUser"

function GithubUsers() {

    let [users,setUsers] = useState([])
    let [username, setUsername] = useState("")

    function handleInputUser(e){
        setUsername(e.target.value)
    }

    function handleButtonClick() {
        setUsers([...users,username])
        setUsername("")
    }

    function handleSubmit(event) {
        event.preventDefault()   
    }

  return (

    <div className="github-users">
        <h2>Github users</h2>
        <ul>
            {users.map((user,index)=>{
                return(
                <li key={index}>
                    <GithubUser username={user}/>
                </li>)
            })}
        </ul>
        <form onSubmit={handleSubmit}>
            <input value={username} type="text" placeholder="Inserte usuario" onChange={handleInputUser}/>
            <button onClick={handleButtonClick} disabled={!username}>Submit</button>
        </form>
    </div>

  )
}

export default GithubUsers