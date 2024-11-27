import React from "react";

function Task({ task, onToggleTask, onDeleteTask }) {
  return (
    <li>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggleTask(task.id,{ ...task, completed: !task.completed })}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
      {task.description}
      </span>
    
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;


