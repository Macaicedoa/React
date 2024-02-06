import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";

function TodoList() {
  let [todos, setTodo] = useState([]);
  let [inputValue, setInputValue] = useState([]);
  let insertedTodo = useRef("");

  
  function handleInputToDo(event) {
    insertedTodo.current = event.target.value
    setInputValue(insertedTodo.current)
  }

  function handleAddClick(){
    setTodo([...todos,inputValue])
    setInputValue("")
  }
  

  return (
    <div>
      <ul>
        <Todo items={todos}/>
      </ul>
      <input value={inputValue} name="input" type="text" onChange={handleInputToDo}/>
      <button onClick={handleAddClick}>Add To Do</button>
    </div>
  );
}

export default TodoList;
