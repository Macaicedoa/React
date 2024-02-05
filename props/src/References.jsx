import { useEffect, useRef } from "react"

function References() {

    const messageRef = useRef(null)
    const mountedRef = useRef(false);

    useEffect(()=>{
        if(!mountedRef.current){
            mountedRef.current = true
            console.log("mounting for the first time")
          }
          console.log("mounting again for debug purposes")
    },[])


  return (
    <div>
        <h1 ref={messageRef}>Me han renderizado!</h1>
    </div>
  )
}

export default References