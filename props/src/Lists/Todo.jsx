function Todo({items,setItems}) {

  

    return (
      items.map((todo, index) => 
          <li key={index}>
            <p>{todo}</p>
            <button onClick={()=>setItems(prevTodos => prevTodos.filter((item, i) => i !== index))}>Remove item</button>
            </li>
        )
    )
  }
  
  export default Todo