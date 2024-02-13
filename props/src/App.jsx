import { Link, Route,Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter"
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";
import GithubUsersList from "./GithubUsersList";

export function App() {

    return(
        <>
            <div className="links-to">
                <Link to="/" >Volver al inicio</Link>
                <Link to="/counter" >Ver Contador</Link>
                <Link to="/users" >Ver Usuarios</Link>
            </div>
            <Routes>
                <Route path="/" element={<Welcome name="Juan"/>}/>
                <Route path="/counter" element={<Counter initValue={10}/>}/>
                <Route path="/users" element={<GithubUsersList/>}>
                    <Route path=":username" element={<ShowGithubUser/>}/>
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            
            
        </>
    )
}

