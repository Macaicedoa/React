import React, { useEffect, useState } from 'react'

function GithubUser({username}) {
  
  const [data,setData] = useState(null)
  const [loading,setLoading] =useState(false)
  const [error, setError] = useState(null)

  useEffect(()=>{
    setLoading(true)
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>{

      if (response.status !== 200) {
        setError(new Error(`User ${username} not found`))
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
  },[username])

  return (
    <div>
      {(data && !error) && <h3>{data.name}{` (${data.login})`}</h3>}
      {(data && !error) && <img src={data.avatar_url} width="50" height="50"></img>}
      {error && <h3>Oops! something went wrong... {error.message}</h3>}
    </div>
  )
}

export default GithubUser