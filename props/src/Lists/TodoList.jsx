import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";


function TodoList() {
  let [todos, setTodo] = useState([]);
  let [inputValue, setInputValue] = useState("");
//   let insertedTodo = useRef("");

  
  function handleInputToDo(event) {
    // insertedTodo.current = event.target.value
    setInputValue(event.target.value)
  }

  function handleAddClick(){
    setTodo([...todos,inputValue])
    setInputValue("")
  }

  function handleResetClick() {
    setTodo([])
  }

  return (
    <div>
      <ul>
        {todos.map((todo, index) => 
          <li key={index}>
            <p>{todo}</p>
            <button onClick={()=>setTodo(prevTodos => prevTodos.filter((item, i) => i !== index))}>Remove item</button>
            </li>
        )} 
      </ul>
      <input value={inputValue} name="input" type="text" onChange={handleInputToDo}/>
      <button onClick={handleAddClick} disabled={!inputValue}>Add To Do</button>
      <button onClick={handleResetClick}>Delete To Do list</button>
    </div>
  );
}

export default TodoList;
