export function Welcome({name, age}) {
    return(
        <div>
            <strong>Welcome, {name? name :"User"}!</strong> 
            <p>Your age is: {age? age: 0} </p>
        </div>   
    )
}

