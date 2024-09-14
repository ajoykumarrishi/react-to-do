import React, { useState, useEffect } from "react";
import AddTaskComponent from "./components/add-task-component";
import TaskComponent from "./components/task-component";
import {
  fetchTasks,
  addTask as apiAddTask,
  deleteTask as apiDeleteTask,
  changeActiveStatus as apiChangeActiveStatus,
} from "./services/api-service";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetchTasks();
      setTasks(response.tasks);
    } catch (error) {
      console.error("Failed to load tasks:", error);
    }
  };

  const getAllTasks = () => setFilter("all");
  const getActiveTasks = () => setFilter("active");
  const getCompletedTasks = () => setFilter("completed");

  const addTask = async (e) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      try {
        const response = await apiAddTask(e.target.value);
        setTasks([...tasks, response.task]);
        e.target.value = "";
      } catch (error) {
        console.error("Failed to add task:", error);
      }
    }
  };

  const deleteTask = async (id) => {
    try {
      await apiDeleteTask(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  const changeActiveStatus = async (id, completed) => {
    try {
      const response = await apiChangeActiveStatus(id, completed);
      setTasks(
        tasks.map((task) =>
          task.id === id
            ? { ...task, completed: response.task.completed }
            : task
        )
      );
    } catch (error) {
      console.error("Failed to change task status:", error);
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  const styles = {
    container: {
      backgroundColor: "#1a1a1a",
      color: "#f8f9fa",
      minHeight: "100vh",
      padding: "2rem",
    },
    title: {
      color: "#ffa500",
      fontWeight: 700,
      textTransform: "uppercase",
      letterSpacing: "2px",
      textAlign: "center",
      marginBottom: "2rem",
    },
  };

  return (
    <div style={styles.container}>
      <div className="container">
        <h1 style={styles.title}>To-Do List</h1>
        <div className="card bg-dark text-light shadow p-4">
          <AddTaskComponent addTask={addTask} />
          <div
            className="btn-group mb-3"
            role="group"
            aria-label="Task filters"
          >
            <button
              className={`btn ${
                filter === "all" ? "btn-warning" : "btn-outline-warning"
              }`}
              onClick={getAllTasks}
            >
              All
            </button>
            <button
              className={`btn ${
                filter === "active" ? "btn-warning" : "btn-outline-warning"
              }`}
              onClick={getActiveTasks}
            >
              Active
            </button>
            <button
              className={`btn ${
                filter === "completed" ? "btn-warning" : "btn-outline-warning"
              }`}
              onClick={getCompletedTasks}
            >
              Completed
            </button>
          </div>
          <ul className="list-group list-group-flush">
            {filteredTasks.map((task) => (
              <TaskComponent
                key={task.id}
                changeActiveStatus={() =>
                  changeActiveStatus(task.id, !task.completed)
                }
                task={task}
                deleteTask={() => deleteTask(task.id)}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
