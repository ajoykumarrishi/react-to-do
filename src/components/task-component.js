function TaskComponent({ changeActiveStatus, task, deleteTask }) {
  return (
    <li key={task.key}>
      <input type="checkbox" onClick={changeActiveStatus} />
      <span>{task.description}</span>
      <button onClick={() => deleteTask(task.key)}>X</button>
    </li>
  );
}

export default TaskComponent;
