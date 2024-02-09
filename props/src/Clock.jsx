import { useContext, useEffect, useState } from "react"
import { LanguageContext } from "./LanguageContext"

function Clock() {
    const [date,setDate] = useState(new Date())
    const language = useContext(LanguageContext)

    useEffect(()=>{
        setInterval(()=>{
            setDate(new Date())
        },1000)
    },[])

      return (
        <h2 className="clock">{language==="en"?"Current time: ":"Hora "}{date.toLocaleTimeString()}</h2>
    )
}

export default Clock