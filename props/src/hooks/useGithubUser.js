import { useState,useEffect } from "react"

export function useGithubUser(username) {

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
        
        setLoading(false)
        setData(json)
      })
      .catch(error=>{
        setError(error)
      })
    },[username])
  
    return {data,loading, error}
  }