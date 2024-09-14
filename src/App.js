import { useState } from "react";
import AddTaskComponent from "./components/add-task-component.js";
import TaskComponent from "./components/task-component.js";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskKey, setTaskKey] = useState(0);

  const addTask = (e) => {
    if (e.key === "Enter") {
      setTasks([
        ...tasks,
        { key: taskKey, description: e.target.value, active: false },
      ]);
      setTaskKey(taskKey + 1);
      e.target.value = "";
    }
  };

  const deleteTask = (key) => {
    setTasks(tasks.filter((task) => task.key !== key));
  };

  const changeActiveStatus = () => {
    console.log("Active button was pressed!");
  };

  return (
    <div>
      <AddTaskComponent addTask={addTask}></AddTaskComponent>
      <ul>
        {tasks.map((task) => {
          return (
            <TaskComponent
              changeActiveStatus={changeActiveStatus}
              task={task}
              deleteTask={deleteTask}
            ></TaskComponent>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
