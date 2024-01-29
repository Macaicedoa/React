import { Hello } from "./Hello";
import { Message } from "./Message";

export function App(){
    return (
        <div>
            <Hello />
            <Hello />
            <Hello />
            <Hello />
            <Hello />
            <Hello />
            <Message/>
        </div>
    )
}

// Se puede renderizar un mismo componente tantas veces se necesite, los componentes se crean para poder ser reutilizados.
// También es posible renderizar componentes directamente en el componente raiz.
// Siempre y cuando el componente raiz devuelva un solo contenedor o elemento padre.