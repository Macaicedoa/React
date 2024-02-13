import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import GithubUser from "./GithubUser"

function GithubUsersList() {

    const [data,setData] = useState([])
    const [loading,setLoading] =useState(false)
    const [error, setError] = useState(null)
  
    useEffect(()=>{
      setLoading(true)
      fetch(`https://api.github.com/users`)
      .then(response=>{
  
        if (response.status !== 200) {
          setError(new Error(`User not found`))
        }
  
        return response.json()
      })
      .then(json=>{
        console.log(json)
        setLoading(false)
        setData(json)
      })
      .catch(error=>{
        setError(error)
      })
    },[])

console.log(data)

  return (

    <div className="github-users"> 
        <h2>Github users</h2>
        <ul>
            {data.map((user,index)=>{
                return(
                <li key={index}>
                    <Link>username={user.login}</Link> 
                    {/* <GithubUser username={user.login}/> */}
                </li>)
            })}
        </ul>
    </div>

    )

}

export default GithubUsersList