import { useEffect, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initValue = 0,incrementValue = 1}) {
    
    const [counter,setCounter] = useState(initValue)

    // useEffect(()=>{console.log(`Page is load`)},[]) /*Se ejecuta solo cuando la página se carga y no en otros cambios*/
    useEffect(()=>{console.log(`the value is ${counter}`)},[counter])

    function handleCounterIncrement() {
        setCounter(counter=>counter+incrementValue)
    }

    function handleCounterDecrement() {
        setCounter(counter - incrementValue)
    }

    function handleCounterReset() {
        setCounter(initValue)
    }

    return(
        <div>
            <CounterDisplay count={counter}/>
            <button onClick={handleCounterIncrement}>+</button>
            <button onClick={handleCounterDecrement}>-</button>
            <button onClick={handleCounterReset}>Reset</button>
        </div>
        
    )
}