import { Welcome } from "./Welcome";

export function App() {
    return(
        <div>
            <h1>Learning props.</h1>
            <hr />
            <Welcome name="María"/>
        </div> 
    )
}

// Si no le paso el valor de name a <Welcome/> solo renderizará una parte de la frase dentro de <p/>: "Welcome, !"