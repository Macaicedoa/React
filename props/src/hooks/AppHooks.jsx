
import HookForm from "./HookForm"
import HookGithubUser from "./HookGithubUSer"
import HookCounter from "./hookCounter"
import { useCurrentLocation } from "./useCurrentLocation"

function AppHooks() {
 
  const {location,onGetLocation,state} = useCurrentLocation()
  
  return (
    
    <div>
        <HookCounter/>
        <hr />
        <HookGithubUser username={"macaicedoa"}/>
        <hr />
        <HookForm/>
        <hr />
        <h2>Your Location</h2>
        <button onClick={onGetLocation}>Get my location</button>
        {state && <h3>Loading...</h3>}
        {location && <h3>Coordinates: {location.latitude}, {location.longitude}</h3>}
    </div>
    
  )
}

export default AppHooks