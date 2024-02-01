import { useState } from "react"

export function Counter({initValue = 0,incrementValue = 1}) {
    
    const [counter,setCounter] = useState(initValue)

    function handleCounterIncrement() {
        setCounter(counter=>counter+incrementValue)
    }

    function handleCounterDecrement() {
        setCounter(counter - incrementValue)
    }

    return(
        <div>
            <h2>My value is: {counter}</h2>
            <button onClick={handleCounterIncrement}>+</button>
            <button onClick={handleCounterDecrement}>-</button>
        </div>
        
    )
}