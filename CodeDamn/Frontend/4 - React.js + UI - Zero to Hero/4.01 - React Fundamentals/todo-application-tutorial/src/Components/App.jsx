import React, { useState } from 'react';
// ID was not a global index
let globalID = 0;

// function App() {
// 	// 1st way and 2nd way are both the same
// 	// const [todos, setTodos] = useState([<li>Jay</li>, <li>John</li>]);
// 	const [task, setTask] = useState('');
// 	const [todos, setTodos] = useState([]);

// 	function createTodo(e) {
// 		if (e) {
// 			e.preventDefault();
// 			if (task === '') {
// 				alert('Enter a task first');
// 			} else {
// 				setTodos([...todos, task]);
// 				setTask('');
// 			}
// 		} else {
// 			setTodos([...todos]);
// 		}
// 	}

// 	// function tryToCheckForEnterKey(e) {
// 	// 	if (e.keyCode === 13) {
// 	// 		createTodo();
// 	// 	}
// 	// 	// console.log(e);
// 	// }

// 	function deleteItem(itemID) {
// 		// console.log(itemID);
// 		// setTodos((oldTodos) => {
// 		// 	oldTodos.filter((item) => item.id !== itemID);
// 		// });
// 		todos.splice(itemID, 1);
// 		createTodo();
// 	}

// 	return (
// 		<div>
// 			<h1>Best To Do App Ever</h1>
// 			{/* we use value to extract the data present inside of the input field */}
// 			<form onSubmit={createTodo}>
// 				<input
// 					type='text'
// 					value={task}
// 					onChange={(event) => {
// 						// event.target gives us the input field
// 						// .value gives us the value
// 						setTask(event.target.value);
// 					}}
// 					// onKeyDown={tryToCheckForEnterKey}
// 				/>
// 				{/* <button type='submit' onClick={createTodo}>
// 					Create Todo
// 				</button> */}
// 				<button type='submit'>Create Todo</button>
// 			</form>

// 			<ul>
// 				{todos.map((item) => {
// 					return (
// 						<div key={item.id}>
// 							<li>
// 								{item.id} - {item.todo}
// 							</li>
// 							<button onClick={() => deleteItem(item.id)}>Delete</button>
// 						</div>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// }

function App() {
	const [task, setTask] = useState('');

	const [todos, setTodos] = useState([]);

	function addItem(e) {
		if (e) {
			e.preventDefault();
			if (task === '') {
				alert('Enter a task first');
			} else {
				setTodos([...todos, task]);
				setTask('');
			}
		} else {
			setTodos([...todos]);
		}
	}

	function deleteItem(index) {
		todos.splice(index, 1);
		addItem();
	}

	return (
		<div className='App'>
			<form onSubmit={addItem}>
				<input
					type='text'
					placeholder='write a todo...'
					value={task}
					onChange={(e) => {
						setTask(e.target.value);
					}}
				/>

				<button type='submit'> Add Item </button>
			</form>
			<ul>
				{todos.map((todo, index) => {
					return (
						<div>
							<li>{todo}</li>
							<button onClick={() => deleteItem(index)}>Delete</button>
						</div>
					);
				})}
			</ul>
		</div>
	);
}

export default App;
