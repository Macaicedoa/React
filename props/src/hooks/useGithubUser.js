import useSWR from "swr"



export function useGithubUser(username) {

  
  const {data,error,mutate} = useSWR(username)

  function fetchGithubUser() {
    mutate()
  }

  return {data, error,onFetchingGithubUser:fetchGithubUser}
  }