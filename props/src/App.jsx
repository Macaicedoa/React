import { AlertClock } from "./AlertClock";
import Clock from "./Clock";
import Colors from "./Colors";
import { Counter } from "./Counter";
import MouseClicker from "./MouseClicker";
import MyForm from "./MyForm";
import { Welcome } from "./Welcome";

export function App() {

    function handleShowCurrentTime() {
        const currentTime = new Date()

        alert(`The current time is: ${currentTime.toLocaleTimeString()}`)
    }

    const colors =[
        {id:1,
        name:"red"},
        {id:2,
        name:"blue"},
        {id:3,
        name:"green"}
    ]
   

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
            <hr />
            <MyForm/>
            <hr />
            <h2>Colores</h2>
            <Colors colors={colors}/>
        </div> 
    )
}

