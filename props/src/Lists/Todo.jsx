
function Todo({items}) {
    
  return (
    items.map((todo, index) => {
        return (<li key={index}>{todo}</li>)
      })
  )
}

export default Todo