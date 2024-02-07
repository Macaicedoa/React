function Todo({items}) {
    return (
      items.map((todo, index) => 
          <li key={index}>
            <p>{todo}</p>
            </li>
        )
    )
  }
  
  export default Todo