import React from "react";

const AddTaskComponent = ({ addTask }) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control form-control-lg bg-dark text-light border-secondary"
        placeholder="Add a new task and press Enter"
        onKeyDown={addTask}
      />
    </div>
  );
};

export default AddTaskComponent;
