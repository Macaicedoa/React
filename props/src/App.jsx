import { Route,Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter"
import ShowGithubUser from "./ShowGithubUser";

export function App() {

    return(
        <Routes>
            <Route path="/" element={<Welcome name="Juan"/>}/>
            <Route path="/counter" element={<Counter initValue={10}/>}/>
            <Route path="/users/:username" element={<ShowGithubUser/>}/>
        </Routes>
    )
}

