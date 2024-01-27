import React from 'react'
import TaskItem from './TaskItem';


const TaskList = ({dataTask}) => {
    
  return (
    <div>
      {dataTask.length > 0 ? (
        <h2>tienes {dataTask.length} por realizar</h2>
      ) : (
        <></>
      )}
      {dataTask.length === 0 ? (
        <h2>No tienes tareas por realizar </h2>
      ) : (
        dataTask.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              //deleteTask={deleteTask}
            ></TaskItem>
          );
        })
      )} 
    </div>
  )
}

export default TaskList