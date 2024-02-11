
import HookGithubUser from "./HookGithubUSer"
import HookCounter from "./hookCounter"

function AppHooks() {
  return (
    
    <div>
        <HookCounter/>
        <hr />
        <HookGithubUser username={"macaicedoa"}/>
    </div>
    
  )
}

export default AppHooks