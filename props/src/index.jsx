import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from 'react-dom/client'
import AppForms from "./forms/AppForms";
import References from "./References";

createRoot(document.getElementById('root')).render( 
    <> {/*Etiquetas vacías para no añadir divs*/}
    {/* <StrictMode> */}

        <App />
        {/* <AppForms/> */}
        {/* <References/> */}
    {/* </StrictMode>   */}
    
    </>
    
    )