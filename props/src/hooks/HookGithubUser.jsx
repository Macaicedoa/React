import { useGithubUser } from './useGithubUser'

function HookGithubUser({username}) {
  
  const {data,error} = useGithubUser(username)

  return (
    <div>
      {(data && !error) && <h3>{data.name}{` (${data.login})`}</h3>}
      {(data && !error) && <img src={data.avatar_url} width="50" height="50"></img>}
      {error && <h3>Oops! something went wrong... {error.message}</h3>}
    </div>
  )
}
export default HookGithubUser