export function Age({age}) {
    return(
        <div>
            {Boolean(age) && <p>Your age is: {age} </p>}
            {age === 0 && <p>You are very young!!</p>}
        </div> 
    )
    
}