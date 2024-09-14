import React from "react";

const TaskComponent = ({ changeActiveStatus, task, deleteTask }) => {
  const styles = {
    completedTaskLabel: {
      color: "#999999",
    },
    taskItem: {
      fontSize: "1.2rem",
    },
  };

  return (
    <li
      className="list-group-item d-flex justify-content-between align-items-center bg-dark text-light"
      style={styles.taskItem}
    >
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            changeActiveStatus(task.id, !task.completed);
          }}
          id={`task-${task.id}`}
        />
        <label
          className={`form-check-label ${
            task.completed ? "text-decoration-line-through" : ""
          }`}
          htmlFor={`task-${task.id}`}
          style={task.completed ? styles.completedTaskLabel : {}}
        >
          {task.content}
        </label>
      </div>
      <button
        className="btn btn-danger btn-sm"
        onClick={() => deleteTask(task.id)}
      >
        &times;
      </button>
    </li>
  );
};

export default TaskComponent;
