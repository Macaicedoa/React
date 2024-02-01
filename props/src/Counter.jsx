import { useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initValue = 0,incrementValue = 1}) {
    
    const [counter,setCounter] = useState(initValue)

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