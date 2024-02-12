import { useEffect, useState } from "react"

export function useCurrentLocation() {

    const [location,setLocation]=useState(null)
    const [loading,setLoading] = useState(false)

    function success(position) {
        setLocation(position.coords);
        setLoading(false) 
    }

    function error() {
        setError(new Error( "Unable to retrieve your location"));
    }

    function handlerGetLocation(){
        setLoading(true) 
        if (!navigator.geolocation) {
            setError(new Error( "Geolocation is not supported by your browser"));
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    }
   
    return {
        location:location,
        onGetLocation:handlerGetLocation,
        state:loading
    }

}