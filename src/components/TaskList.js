import React from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.text} task={task} onDelete={() => onDeleteTask(task)} />
      ))}
    </div>
  );
}

export default TaskList;