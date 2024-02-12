import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "./clock-style.scss"


createRoot(document.getElementById('root')).render( 
    <> {/*Etiquetas vacías para no añadir divs*/}
    {/* <StrictMode> */}
    <BrowserRouter>
        <App/>
    </BrowserRouter>
         
    {/* </StrictMode>   */}
    
    </>
    
    )