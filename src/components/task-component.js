function TaskComponent({ changeActiveStatus, task, deleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          checked={task.completed}
          onChange={changeActiveStatus}
          id={`task-${task.id}`}
        />
        <label
          className={`form-check-label ${
            task.completed ? "text-muted text-decoration-line-through" : ""
          }`}
          htmlFor={`task-${task.id}`}
        >
          {task.content}
        </label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={deleteTask}>
        <i className="bi bi-trash"></i>
      </button>
    </li>
  );
}

export default TaskComponent;
