import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";


function TodoList() {
  let [todos, setTodo] = useState([]);
  let [inputValue, setInputValue] = useState("");
  
  function handleInputToDo(event) {
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
        <Todo items={todos} setItems={setTodo}/>
      </ul>
      <input value={inputValue} name="input" type="text" onChange={handleInputToDo}/>
      <button onClick={handleAddClick} disabled={!inputValue}>Add To Do</button>
      <button onClick={handleResetClick}>Delete To Do list</button>
    </div>
  );
}

export default TodoList;
