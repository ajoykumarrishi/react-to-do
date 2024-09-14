const BASE_URL = "https://fewd-todolist-api.onrender.com/tasks/";
const API_KEY = "1288";

async function handleResponse(response) {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
}

export async function fetchTasks() {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
    return handleResponse(response);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    throw error;
  }
}

export async function addTask(description) {
  try {
    const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: description }),
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error adding task:", error);
    throw error;
  }
}

export async function deleteTask(id) {
  try {
    const response = await fetch(`${BASE_URL}${id}?api_key=${API_KEY}`, {
      method: "DELETE",
    });
    return handleResponse(response);
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
}

export async function changeActiveStatus(id, completed) {
  try {
    const response = await fetch(
      `${BASE_URL}${id}/toggle_complete?api_key=${API_KEY}`,
      {
        method: "PUT",
      }
    );
    return handleResponse(response);
  } catch (error) {
    console.error("Error changing task status:", error);
    throw error;
  }
}
