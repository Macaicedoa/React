import React from 'react'

const TaskItem = ({task}) => {
  return (
    <div>
      <h3>{task.title}</h3>
      <label>Nivel</label>
      <h3>{task.nivel}</h3>
      <label>description</label>
      <p>{task.description}</p>
      {/* <button onClick={deleteT}>Delete</button> */}
    </div>
  )
}

export default TaskItem