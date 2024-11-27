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
        
      </span>
      {task.description}
      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default Task;


