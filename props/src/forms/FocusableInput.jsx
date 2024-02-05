import { useEffect, useRef } from "react"

function FocusableInput() {

  const mountedRef = useRef(false);
  const inputRef = useRef(null)

  useEffect(()=>{
    inputRef.current?.focus()
    },[])

  console.log(inputRef)

  return (
    <div>
      <br />
      <input ref={inputRef} name="username" type="text" />
    </div>
    
  )
}

export default FocusableInput