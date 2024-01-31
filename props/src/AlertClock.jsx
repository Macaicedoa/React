export function AlertClock({handler}) {
    return(
        <div>
            <p>Click the button to show the current time</p>
            <button onClick={handler}>Click me!</button>
        </div>
    )
}