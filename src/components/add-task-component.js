function AddTaskComponent ({ addTask }) {
	return (
		<input type="text" onKeyDown={ addTask } />
	)
}

export default AddTaskComponent;
