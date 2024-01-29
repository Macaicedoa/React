import { Age } from "./Age";

export function Welcome({name, age}) {
    return(
        <div>
            <strong>Welcome, {name? name :"User"}!</strong> 
            <Age age={age}/>
        </div>   
    )
}

