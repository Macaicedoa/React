import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Forms from './Components/Forms'


function App() {

  const formStyle = {
    color: "blue",
    fontSize: "16px",
    border: "3px solid white",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: "5px",
    height: "8rem",
  };

  const [count, setCount] = useState(1000)
  function countPlus(){
    setCount(count+1) 
  }
  function countLess(){
    setCount(count-1) 
  }
  return (
    <>
      <div>
        <h1>Hello World</h1>
        <p>{count}</p>
      </div>
      <button onClick={()=>countPlus()}>+</button>
      <button onClick={()=>countLess()}>-</button>
      <Forms />
    </>
  )
}

export default App
