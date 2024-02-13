import { Link, Route,Routes } from "react-router-dom";
import { Welcome } from "./Welcome";
import {Counter} from "./Counter"
import ShowGithubUser from "./ShowGithubUser";
import NotFound from "./NotFound";
import GithubUsersList from "./GithubUsersList";
import UserMessage from "./UserMessage";

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
                    <Route index element={<h3>Add a user and select it</h3>} />
                </Route>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
            
            
        </>
    )
}

