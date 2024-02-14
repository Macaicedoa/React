import useSWR from "swr"

const fetcher = (username) => {if(username){ return fetch(`https://api.github.com/users/${username}`).then((res) => res.json())}};

export function useGithubUser(username) {

  
  const {data,error,mutate} = useSWR(username,fetcher)

  function fetchGithubUser() {
    mutate()
  }

  return {data, error,onFetchingGithubUser:fetchGithubUser}
  }