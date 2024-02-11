import GithubUser from "../GithubUser"
import HookCounter from "./hookCounter"

function AppHooks() {
  return (
    <div>
        <HookCounter/>
        <hr />
        <GithubUser username={"macaicedoa"}/>
    </div>
    
  )
}

export default AppHooks