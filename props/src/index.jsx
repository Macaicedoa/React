import { StrictMode } from "react";
import { App } from "./App";
import { createRoot } from 'react-dom/client'
import AppForms from "./forms/AppForms";
import References from "./References";
import AppColors from "./Lists/AppColors";
import AppTodoList from "./Lists/AppTodoList";
import "./index.css";

createRoot(document.getElementById('root')).render( 
    <> {/*Etiquetas vacías para no añadir divs*/}
    {/* <StrictMode> */}

        <App />
        {/* <AppForms/> */}
        {/* <References/> */}
        {/* <AppColors/>
        <AppTodoList/> */}
    {/* </StrictMode>   */}
    
    </>
    
    )