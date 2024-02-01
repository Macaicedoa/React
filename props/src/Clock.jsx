import { useEffect, useState } from "react"

function Clock() {
    const [date,setDate] = useState(new Date())

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])

      return (
        <h2>Current Time: {date.toLocaleTimeString()}</h2>
    )
}

export default Clock