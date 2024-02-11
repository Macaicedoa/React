
import HookForm from "./HookForm"
import HookGithubUser from "./HookGithubUSer"
import HookCounter from "./hookCounter"

function AppHooks() {
  return (
    
    <div>
        <HookCounter/>
        <hr />
        <HookGithubUser username={"macaicedoa"}/>
        <hr />
        <HookForm/>
    </div>
    
  )
}

export default AppHooks