import { AlertClock } from "./AlertClock";
import Clock from "./Clock";
import { Counter } from "./Counter";
import MouseClicker from "./MouseClicker";
import { Welcome } from "./Welcome";

export function App() {

    function handleShowCurrentTime() {
        const currentTime = new Date()

        alert(`The current time is: ${currentTime.toLocaleTimeString()}`)
    }


    return(
        <div>
            <h1>Learning React.</h1>
            <hr />
            <Welcome name="John" age={10} />

            <AlertClock handler={handleShowCurrentTime}/>
            <Counter initValue = {0} incrementValue={2}/>
            <hr />
            <Clock/>
            <hr />
            <MouseClicker />
        </div> 
    )
}

