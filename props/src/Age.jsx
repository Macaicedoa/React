export function Age({age}) {
    return(
        <div>
            {/* {Boolean(age) && <p>Your age is: {age} </p>} */}
            {age >=18 ? <p>Your age is: {age} </p>:<p>You are very young!!</p> }
        </div> 
    )
    
}