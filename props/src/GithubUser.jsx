import React, { useEffect, useState } from 'react'

function GithubUser({username}) {
  
  const [data,setData] = useState(null)

  useEffect(()=>{
    fetch(`https://api.github.com/users/${username}`)
    .then(response=>{
      return response.json()
    })
    .then(json=>{
      console.log(json)
      setData(json)
    })
  },[username])

  return (
    <div>
      {data && <h1>{data.name}{` (${data.login})`}</h1>}
      {data && <img src={data.avatar_url} width="150" height="150"></img>}
    </div>
  )
}

export default GithubUser