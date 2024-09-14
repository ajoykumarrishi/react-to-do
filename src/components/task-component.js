function TaskComponent({ changeActiveStatus, task, deleteTask }) {
  return (
    <li key={task.id}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={changeActiveStatus}
      />
      <span>{task.content}</span>
      <button onClick={deleteTask}>X</button>
    </li>
  );
}

export default TaskComponent;
