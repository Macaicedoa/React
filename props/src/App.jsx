import { Route,Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter"

export function App() {

    return(
        <Routes>
            <Route path="/" element={<Welcome name="Juan"/>}/>
            <Route path="/counter" element={<Counter initValue={10}/>}/>
        </Routes>
    )
}

