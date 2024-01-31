import { AlertClock } from "./AlertClock";
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
        </div> 
    )
}

