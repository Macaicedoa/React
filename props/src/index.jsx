import { StrictMode } from "react";
import  AppHooks  from "./hooks/AppHooks";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./clock-style.scss"
import { SWRConfig } from "swr";

const fetcher = (username) => {if(username){ return fetch(`https://api.github.com/users/${username}`).then((res) => res.json())}};


createRoot(document.getElementById('root')).render( 

    <> {/*Etiquetas vacías para no añadir divs*/}
    {/* <StrictMode> */}
    <SWRConfig value={{fetcher}}>
        <BrowserRouter>
            <AppHooks/>
        </BrowserRouter>
    </SWRConfig> 
    {/* </StrictMode>   */}
    
    </>
    
    )