import { useState } from "react";

import AddTaskComponent from "./components/add-task-component.js"

function App() {

	const [test, setTest] = useState("Hello World");

	const addTask = (e) => {
		if (e.key === "Enter") {
			setTest(e.target.value);
		}
	}

	return (
		<div>
			<AddTaskComponent addTask={ addTask }></AddTaskComponent>
			<h1>{ test }</h1>
		</div>
	);
}

export default App;
