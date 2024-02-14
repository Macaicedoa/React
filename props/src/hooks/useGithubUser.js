import useSWR from "swr"

const fetcher = (username) => {if(username){ return fetch(`https://api.github.com/users/${username}`).then((res) => res.json())}};

export function useGithubUser(username) {

  
  const {data,error,isLoading} = useSWR(username,fetcher)

  return {data, error}
  }