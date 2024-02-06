import { useEffect, useRef, useState } from "react"
import { CounterDisplay } from "./CounterDisplay"

export function Counter({initValue = 0,incrementValue = 1}) {
    
    const [counter,setCounter] = useState(initValue)

    let counterRef = useRef(null)
    let prevCounterRef = useRef(null)


    // useEffect(()=>{console.log(`Page is load`)},[]) /*Se ejecuta solo cuando la página se carga y no en otros cambios*/
    // useEffect(()=>{
    //     // console.log(`the value is ${counter}`)   
    // },[counter])

    useEffect(()=>{
        prevCounterRef.current = counterRef.current;    
        if (counter>initValue) {
            counterRef.current = "up"
        }else if (counter<initValue) {
            counterRef.current = "down"
        }else{}
        if (prevCounterRef.current!=counterRef.current) {
            console.log(counterRef.current)
        }
    },[counter])

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