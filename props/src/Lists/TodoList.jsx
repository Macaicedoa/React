import { useEffect, useRef, useState } from "react";
import Todo from "./Todo";

function TodoList() {
  let [todos, setTodo] = useState([]);
  let insertedTodo = useRef("");

  function handleInputToDo(event) {
    insertedTodo.current = event.target.value
  }

  function handleAddClick(){
    setTodo([...todos,insertedTodo.current])
  }
  

  return (
    <div>
      <ul>
        <Todo items={todos}/>
      </ul>
      <input type="text" onChange={handleInputToDo}/>
      <button onClick={handleAddClick}>Add To Do</button>
    </div>
  );
}

export default TodoList;
