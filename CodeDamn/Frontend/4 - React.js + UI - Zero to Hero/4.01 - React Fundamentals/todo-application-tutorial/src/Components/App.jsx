import React, { useState } from 'react';
// ID was not a global index
let globalID = 0;

function App() {
	// 1st way and 2nd way are both the same
	// const [todos, setTodos] = useState([<li>Jay</li>, <li>John</li>]);
	const [task, setTask] = useState('');
	const [todos, setTodos] = useState([]);

	function createTodo(event) {
		event.preventDefault();
		setTodos((oldTodos) => {
			// This makes sure that after appending to the list, we have a
			setTask('');
			// This makes an array from all the members from oldTodos and adds the task to the array
			// ... is the deconstructor in javascript it will divide the array by it's elements
			// return [...oldTodos, task];

			return [...oldTodos, { todo: task, id: globalID++ }];
		});
	}

	// function tryToCheckForEnterKey(e) {
	// 	if (e.keyCode === 13) {
	// 		createTodo();
	// 	}
	// 	// console.log(e);
	// }

	function deleteItem(itemID) {
		console.log(itemID);
		setTodos((oldTodos) => {
			oldTodos.filter((item) => item.id !== itemID);
		});
	}

	return (
		<div>
			<h1>Best To Do App Ever</h1>
			{/* we use value to extract the data present inside of the input field */}
			<form onSubmit={createTodo}>
				<input
					type='text'
					value={task}
					onChange={(event) => {
						// event.target gives us the input field
						// .value gives us the value
						setTask(event.target.value);
					}}
					// onKeyDown={tryToCheckForEnterKey}
				/>
				{/* <button type='submit' onClick={createTodo}>
					Create Todo
				</button> */}
				<button type='submit'>Create Todo</button>
			</form>

			<ul>
				{todos.map((item, index) => {
					return (
						<div key={item.id}>
							<li>
								{item.id} - {item.todo}
							</li>
							<button onClick={() => deleteItem(item.id)}>Delete</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
