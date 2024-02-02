import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from 'react-dom/client'
import AppForms from "./AppForms";

createRoot(document.getElementById('root')).render( 
    <> {/*Etiquetas vacías para no añadir divs*/}
    
        {/* <App /> */}
        <AppForms/>
      
    </>
    )