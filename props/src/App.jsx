import { Welcome } from "./Welcome";

export function App() {
    return(
        <div>
            <h1>Learning props.</h1>
            <hr />
            <Welcome name="John" age={10} />
        </div> 
    )
}

